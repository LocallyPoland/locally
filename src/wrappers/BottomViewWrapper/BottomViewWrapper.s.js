import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    height: hp(15),
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 30,
  },
});
