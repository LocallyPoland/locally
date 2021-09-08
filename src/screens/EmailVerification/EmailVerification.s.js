import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    paddingHorizontal: 15,
  },
  image: {
    width: wp(40),
    height: hp(100) <= 700 ? 120 : wp(40),
    resizeMode: "contain",
    alignSelf: "center",
  },
  primaryText: {
    marginTop: 40,
    fontSize: 21,
    textAlign: "center",
    fontFamily: "PoppinsSemiBold",
  },
  button: {
    marginTop: 40,
  },
});
