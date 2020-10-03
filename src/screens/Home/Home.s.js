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
    justifyContent: "space-between",
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
    marginTop: 30,
  },
  balance: {
    fontFamily: "PoppinsBold",
    lineHeight: 45,
    fontSize: 38,
    textAlign: "center",
    color: appColors.purple,
  },
  emptyOdrerMessage: {
    marginTop: 10,
    fontFamily: "PoppinsRegular",
    textAlign: "center",
    lineHeight: 26,
    color: appColors.anotherText,
    fontSize: 16,
  },
  actionsContainer: {
    padding: 10,
  },
  selectActionMessage: {
    textAlign: "left",
    fontFamily: "PoppinsSemiBold",
    marginLeft: 15,
    width: 150,
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
