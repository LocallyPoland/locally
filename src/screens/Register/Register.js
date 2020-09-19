import React from "react";
import s from "./Register.s";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import { withFormik } from "formik";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import SvgUri from "react-native-svg-uri";
import Input from "../../misc/Input/Input";
import Button from "../../misc/Button/Button";
import { connect } from "react-redux";
import { registerAction } from "../../store/actions/profileActions";

const Register = ({ values, handleChange, navigation, handleSubmit }) => {
  const redirectToLogin = () => navigation.navigate("Login");
  return (
    <MainWrapper style={s.container} onBackPress={navigation.goBack}>
      <ScrollView>
        <Text style={s.title}>Rejestracja</Text>
        <View style={s.infoContainer}>
          <View style={s.inputsRow}>
            <Input
              placeholder="Jimmy"
              onChangeText={handleChange("fName")}
              value={values.fName}
              containerStyle={s.inputRowContainer}
              label="Imie"
            />
            <Input
              placeholder="Carr"
              onChangeText={handleChange("lName")}
              value={values.lName}
              containerStyle={{ ...s.inputRowContainer, marginRight: 0 }}
              label="Nazwisko"
            />
          </View>
          <Input
            placeholder="567 867 316"
            onChangeText={handleChange("phone")}
            value={values.phone}
            mask="+48-999-999-999"
            containerStyle={s.inputContainer}
            label="Telefon"
          />
          <Input
            placeholder="email"
            onChangeText={handleChange("email")}
            value={values.email}
            containerStyle={s.inputContainer}
            label="e-mail"
          />
          <Input
            placeholder="********"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange("password")}
            containerStyle={s.inputContainer}
            label="password"
          />
          <Button
            title="Login"
            onPress={handleSubmit}
            style={s.buttonContainer}
          />
          <Text style={s.secondaryText}>albo</Text>
          <Button
            title="Facebook"
            style={s.facebookButton}
            textStyle={s.facebookButtonStyle}
          >
            <View style={s.facebookIconContainer}>
              <SvgUri source={require("../../../assets/icons/facebook.svg")} />
            </View>
          </Button>
          <View style={s.registerContainer}>
            <Text>Juz masz konto?</Text>
            <TouchableOpacity onPress={redirectToLogin}>
              <View style={s.linkContainer}>
                <Text style={s.linkText}>Zaloguj się</Text>
                <View style={s.border} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </MainWrapper>
  );
};

const formikHoc = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
    fName: "",
    lName: "",
    phone: "",
  }),
  handleSubmit: async (
    values,
    { props: { register, navigation, showModal }, resetForm }
  ) => {
    const isSuccess = await register(values);
    console.log("isSuccess ===", isSuccess);
    if (isSuccess) {
      navigation.navigate("Home");
    } else {
      showModal(
        "Bląd logowania",
        "Takiego konta nie istnieje spróbuj zalogować się ponownie"
      );
    }
    resetForm({
      email: "",
      password: "",
      fName: "",
      lName: "",
      phone: "",
    });
  },
})(Register);

const mapDispatchToProps = (dispatch) => ({
  register: (user) => dispatch(registerAction(user)),
});

export default connect(null, mapDispatchToProps)(formikHoc);
