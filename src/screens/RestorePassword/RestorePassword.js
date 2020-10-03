import React from "react";
import s from "./RestorePassword.s";
import { withFormik } from "formik";
import { connect } from "react-redux";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import Input from "../../misc/Input/Input";
import Button from "../../misc/Button/Button";
import { restorePasswordAction } from "../../store/actions/profileActions";

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
    <ScrollView>
      <MainWrapper title="Przywrócenie hasła" onBackPress={navigation.goBack}>
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
            value={values.email}
            containerStyle={s.inputContainer}
            isError={errors.email && touched.email}
            onBlur={handleBlur("email")}
            label="E-mail"
          />
          <Input
            placeholder="********"
            onChangeText={handleChange("password")}
            value={values.password}
            containerStyle={s.inputContainer}
            isError={errors.password && touched.password}
            onBlur={handleBlur("password")}
            secureTextEntry
            label="Hasło"
          />
          <Input
            placeholder="********"
            onChangeText={handleChange("passwordConfirm")}
            value={values.passwordConfirm}
            isError={errors.passwordConfirm && touched.passwordConfirm}
            containerStyle={s.inputContainer}
            onBlur={handleBlur("passwordConfirm")}
            secureTextEntry
            label="Potwierdź hasło"
          />

          {values.email !== null && (
            <Button
              title="Przywrócić hasło"
              onPress={handleSubmit}
              disabled={Object.keys(errors).length}
              style={s.buttonContainer}
            />
          )}
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
      </MainWrapper>
    </ScrollView>
  );
};

const formikHOC = withFormik({
  mapPropsToValues: () => ({
    email: "",
    passwordConfirm: "",
    password: "",
  }),
  validate: ({ password, passwordConfirm, email }) => {
    const errors = {};
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (password.length <= 5) {
      errors.password = "length";
    }
    if (passwordConfirm.length <= 5 || passwordConfirm !== password) {
      errors.passwordConfirm = "length";
    }
    if (!emailRegex.test(email)) {
      errors.email = "invalid";
    }
    return errors;
  },
  handleSubmit: async ({ password }, { props: { restorePassword } }) => {
    restorePassword(password);
  },
})(RestorePassword);

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  restorePassword: (password) => dispatch(restorePasswordAction(password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
