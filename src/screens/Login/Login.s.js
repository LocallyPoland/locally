import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { appColors } from "../../styles/styles";
import { mhp, mwp } from "../../utils/utils";

export default StyleSheet.create({
  container: {
    marginTop: hp(9),
    alignItems: "center",
  },
  title: {
    fontFamily: "PoppinsBold",
    color: appColors.text,
    fontSize: 28,
    textAlign: "center",
  },
  infoContainer: {
    width: "100%",
    padding: wp(100) < 350 ? 20 : 30,
    borderColor: "#fff",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  inputContainer: {
    marginBottom: 5,
  },
  buttonContainer: {},
  secondaryText: {
    marginVertical: mhp(1, 10, 3),
    textAlign: "center",
    color: appColors.text,
    fontFamily: "PoppinsRegular",
  },
  facebookButton: {
    width: "60%",
    alignSelf: "center",
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: appColors.blue,
  },
  facebookButtonStyle: {
    fontSize: 14,
  },
  facebookIconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
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
  forgotPasswordContainer: {
    marginBottom: 5,
  },
  forgotPasswordText: {
    marginTop: mhp(0.5, 10, 3),
    marginBottom: mhp(0.3, 9, 3),
    textAlign: "center",
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
});
