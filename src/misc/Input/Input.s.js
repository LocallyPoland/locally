import { StyleSheet } from "react-native";
import { appColors } from "../../styles/styles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    justifyContent: "flex-start",
  },
  label: {
    marginTop: 3,
    marginLeft: 20,
    fontFamily: "SarabunMedium",
    fontSize: hp(100) > 1000 ? 25 : 16,
    color: appColors.text,
    marginBottom: 4,
  },
  capitalize: { textTransform: "capitalize" },
  input: {
    paddingHorizontal: 20,
    paddingVertical: hp(100) < 600 ? 6 : hp(100) > 1000 ? 20 : 8,
    flex: 1,
    fontSize: hp(100) > 1000 ? 22 : 16,
    color: "#000",
    fontFamily: "SarabunMedium",
  },
  topInputShadowContainer: {
    position: "absolute",
    top: 0,
  },
  leftInputShadowContainer: {
    position: "absolute",
  },
  bottomInputShadowContainer: {
    position: "absolute",
    bottom: 0,
  },
  rightInputShadowContainer: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  inputContainer: {
    position: "relative",
    borderRadius: 25,
    borderColor: "#fff",
    borderWidth: 1,
    overflow: "hidden",
  },
  error: {
    borderColor: appColors.red,
    borderWidth: 1,
  },
});
