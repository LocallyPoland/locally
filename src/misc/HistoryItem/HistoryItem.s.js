import { StyleSheet } from "react-native";
import { appColors } from "../../styles/styles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { mwp } from "../../utils/utils";

export default StyleSheet.create({
  container: {
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  inner: {
    padding: 15,
    backgroundColor: appColors.lightPurple,
    justifyContent: "space-between",
    borderRadius: 20,
    height: wp(60),
    width: wp(80),
    // marginLeft: wp(4),
    position: "relative",
  },
  header: {
    flexDirection: "row",
    paddingVertical: 5,
    borderBottomColor: appColors.darkBlue,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: "PoppinsBold",
    fontSize: mwp(4, 20, 10),
  },
  titleActive: {
    color: appColors.purple,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 7,
    paddingHorizontal: 9,
  },
  rowMainContent: {
    flex: 1,
    marginLeft: 20,
    flexDirection: "row",
  },
  rowSection: {
    flexDirection: "column",
    flex: 1,
  },
  value: {},
  bold: {
    fontFamily: "PoppinsBold",
    fontSize: mwp(3, 20, 10),
  },
  addressContainer: {
    flexDirection: "row",
    position: "relative",

    alignItems: "center",
  },
  addressColumn: {
    marginTop: 4,
    height: 45,
    justifyContent: "space-between",
    position: "relative",
  },
  image: {
    height: 41,
    width: 14,
    resizeMode: "contain",
  },
  imageContainer: {
    justifyContent: "center",
    marginHorizontal: 8,
    // height: "100%",
  },
  floatRight: {
    textAlign: "right",
  },
  label: {
    // fontSize: 12,
    fontSize: mwp(3.5, 12, 7),
  },
  textActive: {
    color: appColors.anotherText,
  },
  textNotActive: {
    color: appColors.darkBlue,
  },
  addressValue: {
    fontSize: mwp(3.5, 12, 7),
    maxWidth: wp(40),
  },
  priceText: {
    color: appColors.purple,
    fontFamily: "PoppinsBold",
    // fontSize: 24,
    fontSize: mwp(5, 24, 10),
  },
  text: {
    fontSize: mwp(4, 20, 10),
  },
});
