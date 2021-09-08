import React, { useEffect, useState } from "react";
import s from "./ChangePassword.s";
import { withFormik } from "formik";
import { connect } from "react-redux";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import Input from "../../misc/Input/Input";
import Button from "../../misc/Button/Button";
import { changePasswordAction } from "../../store/actions/profileActions";
import { showModalAction } from "../../store/actions/baseActions";
import { object, string, ref } from "yup";
import { sendCodeRequest } from "../../store/api/api";

const ChangePassword = ({
  values,
  errors,
  setErrors,
  touched,
  showModal,
  handleChange,
  handleSubmit,
  handleBlur,
  navigation,
  route,
}) => {
  const [timer, setTimer] = useState(0);
  const [intervalObject, setIntervalObject] = useState(null);

  const redirectToRegister = () => navigation.navigate("Register");

  const { email } = route.params;

  const sendCodeAgain = () => {
    sendCodeRequest(email).then(() => {
      setTimer(30);
      const interval = setInterval(() => {
        setIntervalObject(interval);
        console.log("timer ===", timer);
        setTimer((prev) => {
          if (prev > 0) {
            return prev - 1;
          }
          clearInterval(interval);
          return 0;
        });
      }, 1000);
    });
  };

  useEffect(() => {
    setErrors({
      password: "empty",
      confirmPassword: "empty",
      code: "empty",
    });
    return () => {
      if (intervalObject) {
        clearInterval(+intervalObject);
      }
    };
  }, []);
  return (
    <ScrollView>
      <MainWrapper
        title="Przywrócenie hasła"
        style={s.container}
        onBackPress={navigation.goBack}
      >
        <View style={s.imageContainer}>
          <Image
            style={s.image}
            source={require("../../../assets/login-image.png")}
          />
        </View>
        <View style={s.infoContainer}>
          <Input
            placeholder="45212"
            mask="99999"
            onChangeText={handleChange("code")}
            value={values.code}
            keyboardType="numeric"
            containerStyle={s.inputContainer}
            isError={errors.code && touched.code}
            onBlur={handleBlur("code")}
            label="Kod z wiadomości e-mail"
          />
          <Input
            placeholder="********"
            onChangeText={handleChange("password")}
            value={values.password}
            containerStyle={s.inputContainer}
            isError={errors.password && touched.password}
            onBlur={handleBlur("password")}
            secureTextEntry
            label="Nowe hasło"
          />
          <Input
            placeholder="********"
            onChangeText={handleChange("passwordConfirm")}
            value={values.passwordConfirm}
            isError={errors.passwordConfirm && touched.passwordConfirm}
            containerStyle={s.inputContainer}
            onBlur={handleBlur("passwordConfirm")}
            secureTextEntry
            label="Potwierdź nowe hasło"
          />
          {errors.passwordConfirm && touched.passwordConfirm && (
            <Text style={s.errorText}>* {errors.passwordConfirm}</Text>
          )}
          <View style={s.timerContainer}>
            {timer ? (
              <Text style={s.sendCodeTimeoutText}>
                Możesz wysłać kod ponownie po {timer} sekundach
              </Text>
            ) : (
              <Text style={s.sendCodeText} onPress={sendCodeAgain}>
                Wyślij kod ponownie
              </Text>
            )}
          </View>
          <Button
            title="Przywrócić hasło"
            onPress={handleSubmit}
            disabled={Object.keys(errors).length}
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
      </MainWrapper>
    </ScrollView>
  );
};

const formikHOC = withFormik({
  mapPropsToValues: () => ({
    code: "",
    password: "",
    passwordConfirm: "",
  }),
  validateOnChange: true,
  validationSchema: object().shape({
    code: string().min(1).required(),
    password: string().min(6).required("Password is required"),
    passwordConfirm: string()
      .oneOf([ref("password"), null], "Hasła muszą być identyczne")
      .required("Hasła muszą być identyczne"),
  }),
  handleSubmit: async (
    { code, password },
    { props: { route, changePassword, showModal, navigation } }
  ) => {
    const isSuccess = await changePassword(route.params.email, password, code);
    console.log("is success ===", isSuccess);
    if (isSuccess) {
      navigation.navigate("Home");
    } else {
      showModal("Bląd logowania", "Coś poszło nie tak. Spróbuj ponownie.");
    }
  },
})(ChangePassword);

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  changePassword: (email, password, code) =>
    dispatch(changePasswordAction(email, password, code)),
  showModal: (title, desc) => dispatch(showModalAction(title, desc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
