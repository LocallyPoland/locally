import React from "react";
import s from "./RestorePassword.s";
import { withFormik } from "formik";
import { connect } from "react-redux";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import Input from "../../misc/Input/Input";
import Button from "../../misc/Button/Button";
import {
  restorePasswordAction,
  sendVerificationCodeAction,
} from "../../store/actions/profileActions";
import { object, string } from "yup";
import { showModalAction } from "../../store/actions/baseActions";

const RestorePassword = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  handleBlur,
  navigation,
}) => {
  const redirectToRegister = () => navigation.navigate("Register");

  return (
    <MainWrapper style={s.container} onBackPress={navigation.goBack}>
      <ScrollView>
        <Text style={s.title}>Przywrócenie{"\n"}hasła</Text>
        <View style={s.imageContainer}>
          <Image
            style={s.image}
            source={require("../../../assets/login-image.png")}
          />
        </View>
        <View style={s.infoContainer}>
          <Input
            placeholder="jan-kowalski@gmail.com"
            onChangeText={handleChange("email")}
            autoCapitalize="none"
            value={values.email}
            containerStyle={s.inputContainer}
            isError={errors.email && touched.email}
            onBlur={handleBlur("email")}
            label="E-mail"
          />
          <Button
            title="Zmien hasło"
            onPress={handleSubmit}
            disabled={errors.email || !values.email}
            style={s.buttonContainer}
          />
          <View style={s.textContainer}>
            <Text>Jeszcze nie masz konta?</Text>
            <TouchableOpacity onPress={redirectToRegister}>
              <View style={s.linkContainer}>
                <Text style={s.linkText}>Zarejestruj się</Text>
                <View style={s.border} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </MainWrapper>
  );
};

const formikHOC = withFormik({
  mapPropsToValues: () => ({
    email: "",
  }),
  validationSchema: object().shape({
    email: string().email().required(),
  }),
  handleSubmit: async (
    { email },
    { props: { sendCode, navigation, showModal } }
  ) => {
    const isSuccess = await sendCode(email);
    if (isSuccess) {
      navigation.navigate("ChangePassword", { email });
    } else {
      showModal("Bląd logowania", "Coś poszło nie tak. Spróbuj ponownie.");
    }
  },
})(RestorePassword);

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  sendCode: (email) => dispatch(sendVerificationCodeAction(email)),
  showModal: (title, desc) => dispatch(showModalAction(title, desc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
