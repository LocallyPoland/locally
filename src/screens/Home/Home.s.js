import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { appColors } from "../../styles/styles";

export default StyleSheet.create({
  container: {
    marginTop: hp(4),
  },
  userInfoContainer: {
    alignSelf: "flex-end",
  },
  mainContent: {
    paddingHorizontal: 15,
    flex: 1,
  },
  mainContentInner: {
    flex: 1,
  },
  userName: {
    fontFamily: "PoppinsBold",
    textAlign: "right",
  },
  userEmail: {
    fontFamily: "PoppinsRegular",
    textAlign: "right",
  },
  balanceContainer: {
    flex: 1,
    justifyContent: "center",
  },
  balance: {
    fontFamily: "PoppinsBold",
    lineHeight: wp(14),
    fontSize: wp(12),
    textAlign: "center",
    color: appColors.purple,
  },
  emptyOdrerMessage: {
    marginTop: 10,
    fontFamily: "PoppinsRegular",
    textAlign: "center",
    lineHeight: wp(6),
    color: appColors.anotherText,
    fontSize: wp(5),
  },
  actionsContainer: {
    padding: 10,
  },
  selectActionMessage: {
    textAlign: "left",
    fontFamily: "PoppinsSemiBold",
    marginLeft: 15,
    fontSize: wp(4),
    color: appColors.darkBlue,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  imageContainer: {
    alignItems: "center",
  },
});
