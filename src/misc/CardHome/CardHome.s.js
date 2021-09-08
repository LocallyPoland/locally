import { StyleSheet } from "react-native";
import { appColors } from "../../styles/styles";
import { mhp, mwp } from "../../utils/utils";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  cardContainer: {
    flexBasis: "47%",
    marginBottom: 20,
    overflow: "hidden",
    borderRadius: 25,
  },
  cardContainerFullScreen: {
    flexBasis: "100%",
  },
  card: {
    padding: wp(3),
    borderRadius: 25,
    height: hp(100) > 1000 ? hp(17) : mhp(15, 380, 100),
  },
  cardFullscreen: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  cardImage: {
    width: mwp(9, 60, 30),
    resizeMode: "contain",
    height: mwp(9, 60, 30),
  },
  cardTitle: {
    color: appColors.darkBlue,
    fontFamily: "PoppinsBold",
    fontSize: hp(100) <= 690 ? 10 : hp(100) > 1000 ? 20 : 12,
    marginTop: 10,
  },
  cardTitleFullscreen: {
    fontSize: hp(100) <= 690 ? 13 : 16,
  },
  cardImageFullscreen: {
    width: mwp(15, 90, 50),
    resizeMode: "contain",
    height: mwp(15, 90, 50),
  },
});
