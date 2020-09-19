import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { appColors } from "../../styles/styles";

export default StyleSheet.create({
  container: {
    backgroundColor: "#E9E9FF",
    flex: 1,
    position: "relative",
  },
  backButtonContainer: {
    zIndex: 100,
    padding: 10,
    height: 50,
    width: 50,
    position: "absolute",
    top: wp(100) < 350 ? hp(2) : hp(5),
    left: 15,
    borderRadius: 50,
  },
  backButtonInner: {
    elevation: 6,
    backgroundColor: "#E6EEF8",
    borderRadius: 50,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
  },
  gradient: {},
  inner: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: "PoppinsBold",
    color: appColors.text,
    marginTop: hp(13),
    textAlign: "center",
  },
});
