import React from "react";
import s from "./EditCard.s";
import { withFormik } from "formik";
import { connect } from "react-redux";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import { ScrollView } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import SvgUri from "react-native-svg-uri";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import OuterShadowWrapper from "../../wrappers/OuterShadowWrapper/OuterShadowWrapper";
import Input from "../../misc/Input/Input";
import Button from "../../misc/Button/Button";
import { editCardAction } from "../../store/actions/cardsActions";
import uuid from "react-uuid";

const EditCard = ({
  navigation,
  route,
  values,
  handleChange,
  handleSubmit,
}) => {
  const { card } = route.params;
  console.log("card ===", card);
  return (
    <MainWrapper style={s.container} onBackPress={navigation.goBack}>
      <ScrollView>
        <Text style={s.title}>Zmienić karte</Text>
        <SvgUri
          style={s.plus}
          width={wp(20)}
          height={wp(20)}
          source={require("../../../assets/plus.svg")}
        />
        <OuterShadowWrapper height={wp(75)} width={wp(90)} style={s.shadow}>
          <View style={s.infoContainer}>
            <Input
              label="Imję i nazwisko"
              placeholder="Jimmy Carr"
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
  mapPropsToValues: ({
    route: {
      params: { card },
    },
  }) => ({
    fullName: card.fullName,
    number: card.number,
    date: card.date,
    CVV: card.CVV,
    id: card.id,
  }),
  handleSubmit: (values, { props: { editCard, navigation, route } }) => {
    const { redirectTo } = route.params;
    editCard(values);
    navigation.navigate(redirectTo || "Cards");
  },
})(EditCard);

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  editCard: (card) => dispatch(editCardAction(card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
