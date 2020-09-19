import { StyleSheet } from "react-native";
import { appColors } from "../../styles/styles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {},
  balanceContainer: {
    position: "relative",
    justifyContent: "center",
  },
  balanceShadow: {
    textAlign: "center",
    width: "100%",

    fontSize: wp(20),
    fontFamily: "PoppinsBold",
    color: appColors.text,
    opacity: 0.05,
  },
  balance: {
    fontSize: wp(13.5),
    color: appColors.text,
    fontFamily: "PoppinsBold",
    left: 0,
    width: "100%",
    textAlign: "center",
    position: "absolute",
  },
  button: {
    marginHorizontal: 25,
  },
  bottomContainer: {
    flex: 1,
    marginTop: 40,
  },
});
