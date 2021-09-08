import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { appColors } from "../../styles/styles";

export default StyleSheet.create({
  container: {
    marginTop: hp(5),
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    fontFamily: "PoppinsBold",
    color: appColors.text,
    fontSize: 28,
    textAlign: "center",
  },
  infoContainer: {
    width: "100%",
    padding: 30,
    borderColor: "#fff",
    borderWidth: 2,
    borderBottomWidth: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  facebookButtonContainer: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: "#157df2",
  },
  inputContainer: {
    marginBottom: 5,
  },
  inputsRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  inputRowContainer: {
    flex: 1,
    marginRight: 10,
  },
  buttonContainer: {
    marginTop: 30,
  },
  secondaryText: {
    marginVertical: 10,
    textAlign: "center",
    color: appColors.text,
    fontFamily: "PoppinsRegular",
  },
  facebookButton: {
    width: "60%",
    alignSelf: "center",
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: appColors.blue,
  },
  facebookButtonStyle: {
    fontSize: 14,
  },
  facebookIconContainer: {
    marginRight: 10,
  },
  registerContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  linkContainer: {
    position: "relative",
    marginLeft: 10,
  },
  linkText: {
    textAlign: "right",
    fontFamily: "PoppinsBold",
  },
  border: {
    width: "100%",
    position: "absolute",
    height: 1,
    backgroundColor: "#00000080",
    bottom: 6,
    right: 0,
  },
});
