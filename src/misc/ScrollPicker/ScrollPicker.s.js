import { StyleSheet } from "react-native";
import { appColors } from "../../styles/styles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    zIndex: 100,
    width: wp(30),
    flex: 1,
    borderRadius: 25,
  },
  list: {
    height: hp(100) > 1000 ? 300 : 140,
    paddingVertical: 15,
    paddingHorizontal: 25,
    zIndex: 100,
  },
  firstItem: {
    marginTop: 10,
  },
  item: {
    height: hp(100) > 1000 ? 100 : hp(5),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  lines: {
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  line: {
    height: hp(100) > 1000 ? 5 : 2,
    width: hp(100) > 1000 ? 30 : 12,
    backgroundColor: appColors.anotherPurple,
  },
  mainLine: {
    width: hp(100) > 1000 ? 40 : 20,
    height: hp(100) > 1000 ? 7 : 3,
  },
  activeLine: {
    backgroundColor: appColors.purple,
  },
  activeItem: {},
  text: {
    fontSize: wp(5),
    fontFamily: "PoppinsRegular",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 3,
    fontFamily: "PoppinsBold",
    color: appColors.text,
  },
  activeText: {
    fontSize: wp(7),
    fontFamily: "PoppinsRegular",
    lineHeight: wp(9),
    color: appColors.purple,
    textAlign: "center",
  },
  lastItem: {
    marginBottom: 10,
  },
});
