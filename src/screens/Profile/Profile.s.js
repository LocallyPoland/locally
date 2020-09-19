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
    marginTop: hp(12),
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
    top: -35,
    right: 15,
  },
  logoutButtonText: {
    fontSize: 15,
    color: appColors.red,
    fontFamily: "NunitoSansBold",
  },
});
