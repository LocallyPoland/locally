import { StyleSheet } from "react-native";
import { appColors } from "../../styles/styles";
import { mwp } from "../../utils/utils";

export default StyleSheet.create({
  button: {
    padding: mwp(2, 15, 3),
    borderRadius: 14,
    backgroundColor: "#FE805F",
  },
  disabled: {
    backgroundColor: "#FE805F80",
  },
  buttonText: {
    color: "#fff",
    textTransform: "capitalize",
    textAlign: "center",
    fontSize: 18,
    // lineHeight: 20,
    maxHeight: 25,
    fontFamily: "PoppinsMedium",
  },
  buttonInner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
