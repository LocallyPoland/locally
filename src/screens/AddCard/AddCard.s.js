import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { appColors } from "../../styles/styles";

export default StyleSheet.create({
  container: {
    marginTop: hp(14),
    alignItems: "center",
  },
  title: {
    fontFamily: "PoppinsBold",
    color: appColors.text,
    fontSize: 28,
    textAlign: "center",
  },
  plus: {
    padding: 50,
    alignSelf: "center",
  },
  shadow: {
    flex: 1,
  },
  infoContainer: {
    padding: wp(100) < 350 ? 10 : 15,
    borderColor: "#fff",
    borderWidth: 2,
    height: wp(70),
    minHeight: 260,
    maxHeight: 320,
    width: wp(90),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: appColors.lightPurple,
  },
  cardInf: {
    flexDirection: "row",
    marginTop: 10,
    // flex: 1,
  },
  input: {
    flex: 1,
  },
  cvv: {
    flex: 1,
    width: wp(20),
  },
  cardDate: {
    flex: 1,
  },
  button: {
    width: wp(90),
    paddingTop: 40,
    paddingBottom: 30,
  },
});
