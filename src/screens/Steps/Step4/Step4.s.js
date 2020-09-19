import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { appColors } from "../../../styles/styles";
import OuterShadowWrapper from "../../../wrappers/OuterShadowWrapper/OuterShadowWrapper";
import React from "react";
import { mhp } from "../../../utils/utils";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: mhp(5, 30, 10),
  },
  inner: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    marginTop: 10,
  },
  textContainer: {
    position: "relative",
    justifyContent: "center",
  },
  textLine: {
    position: "absolute",
    left: -40,
    width: 30,
    height: 2,
    backgroundColor: "rgba(139, 156, 173, 0.1)",
  },
  switchButtonImage: {
    width: wp(9),
    height: wp(9),
  },
  text: {
    width: wp(65),
    alignSelf: "center",
    fontFamily: "PoppinsRegular",
    color: appColors.darkBlue,
  },
  textBold: {
    fontFamily: "PoppinsBold",
  },
  typeSwitchContainer: {
    marginBottom: mhp(4, 30, 10),
  },
  typeSwitchButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  innerShadow: {
    height: wp(20),
    width: wp(35),
    borderRadius: 15,
    marginTop: 20,
  },
  typeSwitchButton: {
    flex: 1,
    borderRadius: 15,
    justifyContent: "center",
    paddingHorizontal: wp(5),
  },
  typeSwitchButtonActive: {
    backgroundColor: appColors.lightPurple,
  },
  typeSwitchInner: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  switchButtonIcon: {
    marginRight: 10,
  },
  switchButtonText: {
    fontFamily: "PoppinsSemiBold",
    color: appColors.text,
  },
});
