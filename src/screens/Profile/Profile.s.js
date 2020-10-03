import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { appColors } from "../../styles/styles";

export default StyleSheet.create({
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  container: {
    marginTop: hp(7),
    alignItems: "center",
    minHeight: hp(100),
  },
  image: {
    width: wp(70),
    height: hp(100) < 700 ? 150 : wp(47),
    resizeMode: "contain",
  },
  title: {
    fontFamily: "PoppinsBold",
    color: appColors.text,
    fontSize: 28,
    textAlign: "center",
  },
  infoContainer: {
    width: "100%",
    padding: 30,
    flex: 1,
  },
  inputContainer: {
    marginBottom: 5,
  },
  smallInput: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 30,
  },
  logoutButton: {
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 4,
    backgroundColor: `${appColors.red}00`,
    top: -10,
    right: 15,
  },
  logoutButtonText: {
    fontSize: 15,
    color: appColors.red,
    fontFamily: "NunitoSansBold",
  },
});
