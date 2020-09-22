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
  card: {
    padding: 15,
    borderRadius: 25,
    height: mhp(15, 300, 100),
  },
  cardTitle: {
    color: appColors.darkBlue,
    fontFamily: "PoppinsBold",
    fontSize: 12,
    marginTop: 10,
  },
});
