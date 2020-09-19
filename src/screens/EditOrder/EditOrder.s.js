import { StyleSheet } from "react-native";
import { appColors } from "../../styles/styles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    marginTop: hp(14.5),
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
    padding: 20,
    flex: 1,
  },
  inputContainer: {
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 30,
  },
  qwe: {},
});
