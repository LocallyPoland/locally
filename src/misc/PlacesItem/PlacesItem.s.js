import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { appColors } from "../../styles/styles";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  iconContainer: {
    backgroundColor: appColors.lightPurple,
    width: wp(25),
    height: wp(25),
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  mainContent: {
    height: wp(25),
    marginTop: 20,
    borderRadius: 25,
    flex: 1,
    marginLeft: 20,
    paddingHorizontal: 25,
    paddingVertical: 15,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontFamily: "PoppinsBold",
    color: appColors.text,
  },
  image: {
    width: 35,
    height: 12,
  },
  swipeButton: {
    height: wp(25),
    marginTop: 20,
    paddingHorizontal: wp(5),
    justifyContent: "center",
  },
  swipeButtonText: {
    fontFamily: "PoppinsBold",
    color: appColors.purple,
  },
  swipeButtonTextSecondary: {
    color: `${appColors.darkBlue}90`,
  },
});
