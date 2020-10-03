import { StyleSheet } from "react-native";
import { appColors } from "../../../styles/styles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 35,
    marginTop: -25,
    flex: 1,
  },
  inner: {
    overflow: "hidden",
    flex: 1,
  },
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
    alignSelf: "center",
    fontFamily: "PoppinsRegular",
    color: appColors.darkBlue,
  },

  inputIconContainer: {
    marginLeft: 20,
    marginRight: 10,
  },
  autocompleteContainer: {
    paddingHorizontal: wp(8),
    paddingVertical: 10,
    marginVertical: 10,
    height: hp(10),
  },
  autocompleteItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  autocompleteItemText: {
    marginHorizontal: 15,
    fontFamily: "PoppinsSemiBold",
    color: appColors.darkBlue,
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
  textBold: {
    fontFamily: "PoppinsBold",
  },
  weightContainer: {
    marginTop: 40,
  },
});
