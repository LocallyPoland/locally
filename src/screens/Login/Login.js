import React from "react";
import s from "./Login.s";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import SvgUri from "react-native-svg-uri";
import Input from "../../misc/Input/Input";
import { withFormik } from "formik";
import { connect } from "react-redux";
import Button from "../../misc/Button/Button";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { showModalAction } from "../../store/actions/baseActions";
import { loginAction } from "../../store/actions/profileActions";
import classnames from "classnames-react-native";
import { mwp } from "../../utils/utils";
import AdaptiveWrapper from "../../wrappers/AdaptiveWrapper/AdaptiveWrapper";
import CustomImage from "../../misc/CustomImage/CustomImage";

const Login = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  errors,
  touched,
  navigation,
  showModal,
}) => {
  const redirectToRegister = () => navigation.navigate("Register");
  const redirectToRestore = () => navigation.navigate("RestorePassword");

  return (
    <MainWrapper style={s.container} onBackPress={navigation.goBack}>
      <Text style={s.title}>Login</Text>
      <AdaptiveWrapper minWidthToShow={330}>
        <Image
          style={{ width: wp(40), height: wp(40) }}
          source={require("../../../assets/login-image.png")}
        />
      </AdaptiveWrapper>
      <View style={s.infoContainer}>
        <Input
          placeholder="email"
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
          containerStyle={s.inputContainer}
          label="e-mail"
        />
        <Input
          placeholder="********"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          value={values.password}
          containerStyle={s.inputContainer}
          secureTextEntry
          label="password"
        />
        <View style={classnames(s.textContainer, s.forgotPasswordContainer)}>
          <Text>Zapomniałeś hasło?</Text>
          <TouchableOpacity onPress={redirectToRestore}>
            <View style={s.linkContainer}>
              <Text style={s.linkText}>Przywrócić hasło</Text>
              <View style={s.border} />
            </View>
          </TouchableOpacity>
        </View>
        <Button
          title="Login"
          onPress={handleSubmit}
          style={s.buttonContainer}
          disabled={
            errors.email || errors.password || !values.email || !values.password
          }
        />
        <Text style={s.secondaryText}>albo</Text>
        <Button
          title="Facebook"
          style={s.facebookButton}
          textStyle={s.facebookButtonStyle}
        >
          <View style={s.facebookIconContainer}>
            <CustomImage
              source={require("../../../assets/icons/facebook.png")}
            />
          </View>
        </Button>
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
  );
};

const formikHOC = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validate: ({ email, password }) => {
    const errors = {};
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "invalid email";
    }
    if (password.length < 5) {
      errors.password = "password length less that 6";
    }
    return errors;
  },
  handleSubmit: async (values, { props: { login, showModal, navigation } }) => {
    const isSuccess = await login(values);
    if (isSuccess) {
      navigation.navigate("Home");
    } else {
      showModal(
        "Bląd logowania",
        "Takiego konta nie istnieje spróbuj zalogować się ponownie"
      );
    }
  },
})(Login);

const mapStateToProps = (state) => ({
  isModalVisible: state.base.modal.isVisible,
});
const mapDispatchToProps = (dispatch) => ({
  showModal: (title, desc) => dispatch(showModalAction(title, desc)),
  login: (user) => dispatch(loginAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
