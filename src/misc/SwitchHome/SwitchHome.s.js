import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { appColors } from "../../styles/styles";

export default StyleSheet.create({
  tabNumber: {
    color: `${appColors.lightGray}40`,
    fontFamily: "PoppinsRegular",
    fontSize: wp(5),
  },
  mainContent: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  leftContainer: {
    flexDirection: "row",
  },
  firstTabText: {
    marginLeft: 20,
    color: appColors.text,
    marginBottom: 5,
    fontSize: wp(4),
  },
  tabText: {
    color: appColors.text,
    marginBottom: 5,
    fontSize: wp(4),
  },
  barsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bar: {
    width: 100,
    height: 2,
    backgroundColor: "rgba(110, 129, 160, 0.235905)",
  },
  activeBar: {
    backgroundColor: "rgba(254, 160, 194, 0.8)",
  },
});
