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
    flex: 1,
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
  shadow: {},
  infoContainer: {
    padding: 10,
    borderColor: "#fff",
    borderWidth: 2,
    width: wp(90),
    height: wp(32),
    justifyContent: "center",
    paddingVertical: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: appColors.lightPurple,
  },
  row: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    // flex: 1,
  },
  input: {
    flex: 1,
  },
  button: {
    width: wp(90),
    paddingTop: 40,
    paddingBottom: 30,
  },
});
