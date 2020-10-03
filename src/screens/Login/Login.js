import React from "react";
import s from "./Login.s";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import Input from "../../misc/Input/Input";
import { withFormik } from "formik";
import { connect } from "react-redux";
import Button from "../../misc/Button/Button";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { showModalAction } from "../../store/actions/baseActions";
import {
  facebookLoginAction,
  loginAction,
  registerAction,
} from "../../store/actions/profileActions";
import classnames from "classnames-react-native";
import AdaptiveWrapper from "../../wrappers/AdaptiveWrapper/AdaptiveWrapper";
// import { , AccessToken } from "react-native-fbsdk";
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginButton,
} from "react-native-fbsdk";
import CustomImage from "../../misc/CustomImage/CustomImage";

const Login = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  errors,
  facebookLogin,
  navigation,
  showModal,
}) => {
  const redirectToRegister = () => navigation.navigate("Register");
  const redirectToRestore = () => navigation.navigate("RestorePassword");

  //Create response callback.
  const responseInfoCallback = async (error, result) => {
    if (!error) {
      const { name, id } = result;
      const [fName, lName] = name.split(" ");
      const isSuccess = await facebookLogin({ fName, lName, id });
      if (isSuccess) {
        navigation.navigate("Home");
      } else {
        showModal("Bląd logowania", "Coś poszło nie tak. Spróbuj ponownie.");
      }
    }
  };

  // Create a graph request asking for user information with a callback to handle the response.

  console.log("wp ===", wp(100));

  return (
    <MainWrapper style={s.container} onBackPress={navigation.goBack}>
      <View>
        <Text style={s.title}>Login</Text>
        {/*<AdaptiveWrapper minHeightToShow={620}>*/}
        <Image
          style={s.image}
          source={require("../../../assets/login-image.png")}
        />
        {/*</AdaptiveWrapper>*/}
      </View>
      <View style={s.infoContainer}>
        <Input
          placeholder="jan-kowalski@gmail.com"
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
        <View style={s.facebookButtonContainer}>
          <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                  console.log(data.accessToken.toString());
                  const infoRequest = new GraphRequest(
                    "/me",
                    null,
                    responseInfoCallback
                  );
                  // Start the graph request.
                  new GraphRequestManager().addRequest(infoRequest).start();
                });
              }
            }}
            onLogoutFinished={() => console.log("logout.")}
          />
        </View>
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
      showModal("Bląd logowania", "Coś poszło nie tak. Spróbuj ponownie.");
    }
  },
})(Login);

const mapStateToProps = (state) => ({
  isModalVisible: state.base.modal.isVisible,
});
const mapDispatchToProps = (dispatch) => ({
  showModal: (title, desc) => dispatch(showModalAction(title, desc)),
  login: (user) => dispatch(loginAction(user)),
  facebookLogin: (user) => dispatch(facebookLoginAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
