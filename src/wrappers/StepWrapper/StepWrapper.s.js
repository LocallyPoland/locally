import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { appColors } from "../../styles/styles";
import { mwp } from "../../utils/utils";

export default StyleSheet.create({
  header: {
    paddingVertical: 15,
    flexDirection: "row",
    paddingHorizontal: wp(8),
    height: hp(18),
    alignItems: "flex-end",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderColor: "#fff",
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: appColors.lightPurple,
    marginTop: -5,
  },
  headerContainer: {
    position: "absolute",
  },
  headerText: {
    textAlign: "center",
    color: appColors.lightGray,
    fontFamily: "PoppinsBold",
  },
  stepsContainer: { flexDirection: "row" },
  step: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepCircle: {
    width: 18,
    height: 18,
    borderRadius: 25,
    borderColor: appColors.darkBlue,
    borderWidth: 2,
    opacity: 0.5,
  },
  activeCircle: {
    opacity: 1,
  },
  stepCircleInner: {
    flex: 1,
    margin: 2,
    backgroundColor: appColors.darkBlue,
    borderRadius: 25,
  },
  stepLine: {
    width: wp(10),
    height: 2,
    backgroundColor: appColors.darkBlue,
    opacity: 0.5,
  },
  titleContainer: {
    flexDirection: "row",
    paddingTop: 30,
    alignItems: "center",
    marginTop: hp(17),
  },
  titleStepNumber: {
    fontSize: wp(100) < 350 ? 80 : 92,
    fontFamily: "PoppinsBold",
    color: appColors.darkBlue,
    opacity: 0.1,
    marginLeft: -30,
    lineHeight: 100,
    height: 80,
  },
  titleText: {
    fontSize: mwp(5, 22, 14),

    fontFamily: "PoppinsBold",
    textAlignVertical: "center",
    lineHeight: 27,
    color: appColors.darkBlue,
    height: 100,
  },
  titleNumber: {},
  inner: {
    borderLeftWidth: 2,
    borderLeftColor: "rgba(139, 156, 173, 0.1)",
    flex: 1,
    overflow: "hidden",
    paddingHorizontal: 35,
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 16,
  },
  button: {
    marginBottom: 30,
  },
});
