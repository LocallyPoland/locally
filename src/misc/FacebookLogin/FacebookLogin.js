import React from "react";
import s from "./FacebookLogin.s";
import { connect } from "react-redux";
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginButton,
  LoginManager,
} from "react-native-fbsdk";
import { View, TouchableOpacity, Text } from "react-native";
import { showModalAction } from "../../store/actions/baseActions";
import { facebookLoginAction } from "../../store/actions/profileActions";

const FacebookLogin = ({ facebookLogin, navigation, showModal }) => {
  // LoginManager.setLoginBehavior("WEB_ONLY");

  const login = () => {
    LoginManager.setLoginBehavior("WEB_ONLY");
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(
      (res) => {
        if (res.isCancelled) {
          return;
        }
        console.log("res ===", res);
        const infoRequest = new GraphRequest(
          "/me?fields=email,name",
          null,
          responseInfoCallback
        );
        new GraphRequestManager().addRequest(infoRequest).start();
      }
    );
  };

  const responseInfoCallback = async (error, result) => {
    if (!error) {
      const { name, id, email } = result;
      console.log("result ===", result);
      const [fName, lName] = name.split(" ");
      const isSuccess = await facebookLogin({ fName, lName, id, email });
      if (isSuccess) {
        navigation.navigate("Home");
      } else {
        showModal("Bląd logowania", "Coś poszło nie tak. Spróbuj ponownie.");
      }
    } else {
      console.log("responseInfoCallback err ===", error);
      showModal("Bląd logowania", "Coś poszło nie tak. Spróbuj ponownie.");
    }
  };
  return (
    <TouchableOpacity style={s.facebookButtonContainer} onPress={login}>
      <Text style={s.facebookButtonText}>Facebook</Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  showModal: (title, desc) => dispatch(showModalAction(title, desc)),
  facebookLogin: (user) => dispatch(facebookLoginAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLogin);
