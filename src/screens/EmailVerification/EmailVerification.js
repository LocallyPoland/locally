import React, { useEffect } from "react";
import s from "./EmailVerification.s";
import { connect } from "react-redux";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import { Image, AppState, Text, View } from "react-native";
import Button from "../../misc/Button/Button";
import { getUserAction } from "../../store/actions/profileActions";

const EmailVerification = ({ navigation, getUser }) => {
  const getUserHandler = async () => {
    const isSuccess = await getUser();
    if (isSuccess) {
      navigation.navigate("Home");
    }
    return isSuccess;
  };

  const onAppStateChange = (state) => {
    if (state === "active") {
      getUserHandler();
    }
  };

  useEffect(() => {
    AppState.addEventListener("change", onAppStateChange);

    return () => {
      AppState.removeEventListener("change", onAppStateChange);
    };
  }, []);

  return (
    <MainWrapper
      title="Potwierdzenie e-maila"
      style={s.container}
      onBackPress={navigation.goBack}
    >
      <View style={s.inner}>
        <View style={s.imageContainer}>
          <Image
            style={s.image}
            source={require("../../../assets/login-image.png")}
          />
        </View>
        <Text style={s.primaryText}>
          Konto zostało zarejestrowane, aby skorzystać z aplikacji, kliknij link
          przesłany na maila
        </Text>
        <Button
          style={s.button}
          onPress={getUserHandler}
          title="Już potwierdziłem(-am)"
        />
      </View>
    </MainWrapper>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUserAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailVerification);
