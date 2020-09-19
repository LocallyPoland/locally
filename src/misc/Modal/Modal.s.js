import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { appColors } from "../../styles/styles";

export default StyleSheet.create({
  overlay: {
    height: hp(105),
    width: wp(100),
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(227, 169, 174, 0.17);",
  },
  modal: {
    width: wp(80),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderColor: "rgba(254, 128, 92, 0.71)",
    borderRadius: 24,
    position: "relative",
  },
  modalContent: {
    padding: 20,
  },

  title: {
    fontFamily: "NunitoSansBold",
    fontSize: 22,
    textAlign: "center",
    color: appColors.text,
    lineHeight: 30,
  },
  desc: {
    fontFamily: "MontserratRegular",
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    margin: 2,
    borderRadius: 20,
    backgroundColor: appColors.lightPurple,
    flex: 1,
  },
  buttonText: {
    color: appColors.text,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  resolveButton: {
    flex: 1.5,
    marginRight: 20,
    borderRadius: 20,
  },
  rejectButton: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#00000000",
  },
});
