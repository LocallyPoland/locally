import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { appColors } from "../../../styles/styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: hp(6),
  },
  inner: {
    flex: 1,
  },
  infoContainer: {},
  inputContainer: {
    marginVertical: 20,
  },
  input: {
    fontSize: 14,
    textAlignVertical: "center",
    minHeight: 60,
  },
  textContainer: {
    position: "relative",
    justifyContent: "center",
  },
  textLine: {
    position: "absolute",
    left: -40,
    width: 35,
    height: 2,
    top: 10,
    backgroundColor: "rgba(139, 156, 173, 0.1)",
  },
  text: {
    width: wp(65),
    fontFamily: "PoppinsRegular",
    color: appColors.darkBlue,
  },
  textBold: {
    fontFamily: "PoppinsBold",
    color: appColors.darkBlue,
  },
  scrollInner: {
    paddingVertical: 20,
    alignItems: "center",
  },
  card: {
    width: 200,
    marginTop: 0,
    marginRight: 20,
  },
  addCard: {
    marginTop: -20,
  },
  buttonContainer: {},
});
