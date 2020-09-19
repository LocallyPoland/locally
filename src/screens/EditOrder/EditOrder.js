import React from "react";
import s from "./EditOrder.s";
import { View, Text } from "react-native";
import { withFormik } from "formik";
import { connect } from "react-redux";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import Input from "../../misc/Input/Input";
import Button from "../../misc/Button/Button";
import { ScrollView } from "react-native-gesture-handler";

const EditOrder = ({
  values,
  handleChange,
  handleSubmit,
  navigation,
  showModal,
}) => {
  return (
    <ScrollView>
      <MainWrapper style={s.container} onBackPress={navigation.goBack}>
        <Text style={s.title}>Zamowienie 42</Text>
        <View style={s.infoContainer}>
          <Input
            placeholder="Paczka"
            label="Typ"
            onChangeText={handleChange("orderType")}
            value={values.orderType}
            containerStyle={s.qwe}
          />
          <Input
            placeholder="20 kg"
            label="waga do"
            onChangeText={handleChange("orderWeight")}
            value={values.orderWeight}
          />
          <Input
            placeholder="80 cm"
            label="rozmiar do"
            onChangeText={handleChange("orderSize")}
            value={values.orderSize}
          />
          <Input
            placeholder="ul. Rynek 3"
            label="skąd"
            onChangeText={handleChange("orderStorage")}
            value={values.orderStorage}
          />
          <Input
            placeholder="ul. Lewakowskiego 12/55"
            label="dokąd"
            onChangeText={handleChange("orderPlace")}
            value={values.orderPlace}
          />
          <Input
            placeholder="15:20"
            label="czas odbioru przesyłki"
            onChangeText={handleChange("orderTime")}
            value={values.orderTime}
          />
          <Input
            placeholder="brak"
            label="uwagi do kuriera"
            onChangeText={handleChange("orderComment")}
            value={values.orderComment}
            keyboardType="numeric"
          />
          <Button
            title="Zapisz zmiany"
            style={s.buttonContainer}
            onPress={handleSubmit}
          />
        </View>
      </MainWrapper>
    </ScrollView>
  );
};

const formikHOC = withFormik({
  mapPropsToValues: () => ({
    orderType: "",
    orderWeight: "",
    orderSize: "",
    orderStorage: "",
    orderPlace: "",
    orderTime: "",
    orderComment: "",
  }),
  handleSubmit: (values) => {},
})(EditOrder);

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
