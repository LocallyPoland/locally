import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { appColors } from "../../../styles/styles";
import { mwp } from "../../../utils/utils";

export default StyleSheet.create({
  inner: {},
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    position: "relative",
    justifyContent: "center",
    marginTop: wp(100) < 350 ? 20 : 0,
  },
  textLine: {
    position: "absolute",
    left: -wp(12),
    width: 30,
    height: 2,
    backgroundColor: "rgba(139, 156, 173, 0.1)",
  },
  text: {
    width: wp(65),
    fontSize: mwp(3, 20, 10),
    alignSelf: "center",
    fontFamily: "PoppinsRegular",
    color: appColors.darkBlue,
  },
  button: {
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 16,
  },
  inputIconContainer: {
    marginLeft: 20,
    marginRight: 10,
  },
  autocompleteContainer: {
    paddingHorizontal: wp(8),
    paddingVertical: 10,
    marginVertical: 10,
    height: hp(8),
  },
  autocompleteItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  autocompleteItemText: {
    marginHorizontal: 8,
    fontFamily: "PoppinsSemiBold",
    color: appColors.darkBlue,
  },
  textBold: {
    fontFamily: "PoppinsBold",
  },
  input: {
    borderRadius: 20,
  },
  inputContainer: {
    borderRadius: 20,
    borderWidth: 0,
  },
  autocompleteItemTextSecondary: {
    fontFamily: "PoppinsSemiBold",
    color: appColors.darkBlue,
    opacity: 0.5,
  },
});
