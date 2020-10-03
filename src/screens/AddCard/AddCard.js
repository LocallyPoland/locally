import React from "react";
import s from "./AddCard.s";
import { withFormik } from "formik";
import { connect } from "react-redux";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import SvgUri from "react-native-svg-uri";
import Input from "../../misc/Input/Input";
import Button from "../../misc/Button/Button";
import { ScrollView } from "react-native-gesture-handler";
import OuterShadowWrapper from "../../wrappers/OuterShadowWrapper/OuterShadowWrapper";
import { addCardAction } from "../../store/actions/cardsActions";
import uuid from "react-uuid";
import AdaptiveWrapper from "../../wrappers/AdaptiveWrapper/AdaptiveWrapper";
import CustomImage from "../../misc/CustomImage/CustomImage";

const AddCard = ({
  values,
  handleChange,
  handleSubmit,
  navigation,
  showModal,
  addCard,
}) => {
  return (
    <MainWrapper style={s.container} onBackPress={navigation.goBack}>
      <ScrollView>
        <Text style={s.title}>Dodaj kartę</Text>
        <AdaptiveWrapper minWidthToShow={350}>
          <CustomImage
            style={s.plus}
            width={wp(20)}
            height={wp(20)}
            source={require("../../../assets/icons/plus.png")}
          />
        </AdaptiveWrapper>
        <OuterShadowWrapper height={wp(75)} width={wp(90)} style={s.shadow}>
          <View style={s.infoContainer}>
            <Input
              label="Imję i nazwisko"
              placeholder="Jan Kowalski"
              onChangeText={handleChange("fullName")}
              value={values.fullName}
            />
            <Input
              placeholder="0000 0000 0000 0000"
              label="Numer karty"
              mask="9999 9999 9999 9999"
              onChangeText={handleChange("number")}
              value={values.number}
              keyboardType="numeric"
            />
            <View style={s.cardInf}>
              <Input
                containerStyle={{ ...s.input, marginRight: 20 }}
                placeholder="10/20"
                mask="99/99"
                label="Data ważności"
                onChangeText={handleChange("date")}
                value={values.date}
                keyboardType="numeric"
              />
              <Input
                containerStyle={s.input}
                placeholder="123"
                mask="999x"
                label="CVV"
                onChangeText={handleChange("CVV")}
                value={values.CVV}
                keyboardType="numeric"
              />
            </View>
          </View>
        </OuterShadowWrapper>
        <View style={s.button}>
          <Button
            title="Dodaj"
            onPress={handleSubmit}
            style={s.buttonContainer}
          />
        </View>
      </ScrollView>
    </MainWrapper>
  );
};

const formikHOC = withFormik({
  mapPropsToValues: () => ({
    fullName: "",
    number: "",
    date: "",
    CVV: "",
    id: uuid(),
  }),
  handleSubmit: (
    values,
    { props: { addCard, user, route, navigation }, resetForm }
  ) => {
    console.log("user ===", user);
    console.log("values ===", values);
    addCard(values);
    resetForm({ fullName: "", number: "", date: "", CVV: "", id: uuid() });
    const { params } = route;
    if (params?.goBack) {
      navigation.goBack();
      return;
    }
    if (params?.redirectTo) {
      const { redirectTo } = params;
      navigation.navigate(redirectTo);
    }
  },
})(AddCard);

const mapStateToProps = (state) => ({
  user: state.profile,
});
const mapDispatchToProps = (dispatch) => ({
  addCard: (card) => dispatch(addCardAction(card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
