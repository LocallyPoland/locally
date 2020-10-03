import { StyleSheet } from "react-native";
import { appColors } from "../../styles/styles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    minWidth: 200,
    borderRadius: 25,
    position: "relative",
    width: wp(75),
  },
  list: {
    height: 120,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  item: {
    width: wp(25),
    justifyContent: "space-between",
  },
  firstItem: {
    marginLeft: wp(25.2),
  },
  lines: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  line: {
    height: 10,
    width: 2,
    backgroundColor: appColors.anotherPurple,
  },
  mainLine: {
    width: 3,
    height: 20,
  },
  activeLine: {
    backgroundColor: appColors.purple,
  },
  activeItem: {},
  text: {
    fontSize: 22,
    fontFamily: "PoppinsRegular",
  },
  title: {
    textAlign: "center",
    marginBottom: 3,
    fontFamily: "PoppinsBold",
    color: appColors.text,
  },
  activeText: {
    fontSize: 30,
    fontFamily: "PoppinsRegular",
    lineHeight: 35,
    color: appColors.purple,
  },
  scrollInnerText: {
    position: "absolute",
    textAlign: "center",
    alignSelf: "center",
    width: "94%",
    fontSize: 14,
    color: appColors.purple,
    fontFamily: "PoppinsRegular",
  },
});
