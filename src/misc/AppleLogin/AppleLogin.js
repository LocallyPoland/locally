import React from "react";
import s from "./AppleLogin.s";
import {
  appleAuth,
  AppleButton,
} from "@invertase/react-native-apple-authentication";
import { Text, TouchableOpacity } from "react-native";

const AppleLogin = () => {
  async function onAppleButtonPress() {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user
    );

    console.log("credentialState ===", credentialState);

    if (credentialState === appleAuth.State.AUTHORIZED) {
    }
  }

  return (
    <TouchableOpacity style={s.button} onPress={() => onAppleButtonPress()}>
      <Text style={s.buttonText}>Continue with Apple</Text>
    </TouchableOpacity>
    // <AppleButton
    //   buttonStyle={AppleButton.Style.BLACK}
    //   buttonType={AppleButton.Type.DEFAULT}
    //   style={{
    //     width: 160, // You must specify a width
    //     height: 45, // You must specify a height
    //   }}
    //   onPress={() => onAppleButtonPress()}
    // />
  );
};

export default AppleLogin;
