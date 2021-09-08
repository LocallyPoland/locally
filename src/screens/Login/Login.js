import React, { useEffect, useRef, useState } from "react";
import s from "./Login.s";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import Input from "../../misc/Input/Input";
import { withFormik } from "formik";
import { connect } from "react-redux";
import Button from "../../misc/Button/Button";
import { showModalAction } from "../../store/actions/baseActions";
import {
  facebookLoginAction,
  loginAction,
} from "../../store/actions/profileActions";
import classnames from "classnames-react-native";
import FacebookLogin from "../../misc/FacebookLogin/FacebookLogin";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import appleAuth, {
  AppleButton,
} from "@invertase/react-native-apple-authentication";
import AppleLogin from "../../misc/AppleLogin/AppleLogin";
import { Platform } from "react-native-web";

const Login = ({
  user,
  values,
  showModal,
  handleChange,
  handleSubmit,
  handleBlur,
  errors,
  navigation,
}) => {
  const redirectToRegister = () => navigation.navigate("Register");
  const redirectToRestore = () => navigation.navigate("RestorePassword");
  const [isExpanded, setExpanded] = useState(false);
  const passwordInputRef = useRef();
  const scrollRef = useRef();

  const onFocus = () => {
    if (hp(100) < 700) {
      setExpanded(true);
    }
    scrollRef.current.scrollTo({ x: 0, y: 150, animated: true });
  };

  const onSubmitEditing = (type) => {
    if (type === "email") {
      passwordInputRef.current.focus();
    } else if (
      type === "password" &&
      (errors.email || errors.password || !values.email || !values.password)
    ) {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (user.isVerified === false)
      showModal(
        "Konto zostało zarejestrowane",
        "Aby skorzystać z aplikacji kliknij link przesłany na maila",
        () => navigation.navigate("EmailVerification")
      );
  }, [user.isVerified]);

  return (
    <MainWrapper style={s.container} onBackPress={navigation.goBack}>
      <ScrollView ref={scrollRef}>
        <View>
          <Text style={s.title}>Login</Text>
          {/*<AdaptiveWrapper minHeightToShow={620}>*/}
          <Image
            style={s.image}
            source={require("../../../assets/login-image.png")}
          />
          {/*</AdaptiveWrapper>*/}
        </View>
        <View
          style={classnames(s.infoContainer, [
            s.expandedInfoContainer,
            isExpanded,
          ])}
        >
          <Input
            placeholder="jan-kowalski@gmail.com"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            onFocus={onFocus}
            onSubmitEditing={() => onSubmitEditing("email")}
            value={values.email}
            autoCapitalize="none"
            containerStyle={s.inputContainer}
            label="e-mail"
          />
          <Input
            placeholder="********"
            onFocus={onFocus}
            reference={passwordInputRef}
            onSubmitEditing={() => onSubmitEditing("password")}
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
              errors.email ||
              errors.password ||
              !values.email ||
              !values.password
            }
          />
          <Text style={s.secondaryText}>albo</Text>
          <FacebookLogin {...{ navigation }} />
          {Platform.OS === "ios" && <AppleLogin />}

          {/*<LoginButton />*/}
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
    console.log("is success login ===", isSuccess);
    if (isSuccess) {
      navigation.navigate("Home");
    } else {
      showModal("Bląd logowania", "Coś poszło nie tak. Spróbuj ponownie.");
    }
  },
})(Login);

const mapStateToProps = (state) => ({
  isModalVisible: state.base.modal.isVisible,
  user: state.profile,
});
const mapDispatchToProps = (dispatch) => ({
  showModal: (title, desc, onResolve) =>
    dispatch(showModalAction(title, desc, () => {}, onResolve)),
  login: (user) => dispatch(loginAction(user)),
  facebookLogin: (user) => dispatch(facebookLoginAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
