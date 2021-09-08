import { StyleSheet } from "react-native";
import { appColors } from "../../styles/styles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import React from "react";

export default StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    flex: 1,
    height: hp(84),
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: wp(50),
    // height: wp(50),
    height: hp(100) <= 700 ? 120 : wp(40),
    resizeMode: "contain",
  },
  infoContainer: {
    width: "100%",
    padding: 30,
    borderColor: "#fff",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  timerContainer: {
    marginTop: 5,
    marginLeft: 10,
    alignSelf: "flex-start",
  },
  sendCodeText: {
    fontFamily: "PoppinsRegular",
    borderBottomWidth: 0.5,
    fontSize: 12,
    paddingTop: 5,
    borderBottomColor: appColors.anotherPurple,
  },
  sendCodeTimeoutText: {
    paddingTop: 5,
    fontFamily: "PoppinsRegular",
    fontSize: 12,
  },
  inputContainer: {
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
  textContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  secondaryText: {
    marginVertical: 10,
    textAlign: "center",
    color: appColors.text,
    fontFamily: "PoppinsRegular",
  },
  linkContainer: {
    position: "relative",
    marginLeft: 10,
  },
  linkText: {
    textAlign: "right",
    fontFamily: "PoppinsBold",
  },
  border: {
    width: "100%",
    position: "absolute",
    height: 1,
    backgroundColor: "#00000080",
    bottom: 6,
    right: 0,
  },
  errorText: {
    fontSize: 14,
    marginLeft: 15,
    color: appColors.red,
  },
});
