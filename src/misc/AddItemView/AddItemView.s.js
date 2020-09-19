import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { appColors } from "../../styles/styles";

export default StyleSheet.create({
  container: {},
  inner: {
    flexDirection: "row",
    // flex: 1,
    alignItems: "center",
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
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    fontFamily: "PoppinsBold",
    color: `${appColors.text}30`,
  },
});
