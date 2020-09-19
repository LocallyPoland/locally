import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { appColors } from "../../../styles/styles";
import { mwp } from "../../../utils/utils";

export default StyleSheet.create({
  container: {
    marginVertical: 35,
    flex: 1,
    justifyContent: "space-between",
  },
  inner: {},
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    position: "relative",
    justifyContent: "center",
  },
  textLine: {
    position: "absolute",
    left: -20,
    width: 30,
    height: 2,
    backgroundColor: "rgba(139, 156, 173, 0.1)",
  },
  text: {
    width: wp(65),
    alignSelf: "center",
    fontSize: mwp(4, 20, 10),
    marginVertical: 15,
    fontFamily: "PoppinsRegular",
    color: appColors.darkBlue,
  },
  textBold: {
    fontFamily: "PoppinsBold",
    color: appColors.darkBlue,
  },
  pickersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  pickersExtractor: {
    fontSize: 40,
  },
});
