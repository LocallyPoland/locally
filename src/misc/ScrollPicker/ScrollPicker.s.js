import { StyleSheet } from "react-native";
import { appColors } from "../../styles/styles";

export default StyleSheet.create({
  container: {
    width: 120,
    borderRadius: 25,
  },
  list: {
    height: 140,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  item: {
    height: 35,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  lines: {
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  line: {
    height: 2.5,
    width: 11,
    backgroundColor: appColors.anotherPurple,
  },
  mainLine: {
    width: 20,
    height: 4,
  },
  activeLine: {
    backgroundColor: appColors.purple,
  },
  activeItem: {},
  text: {
    fontSize: 17,
    fontFamily: "PoppinsRegular",
    textAlign: "center"
  },
  title: {
    textAlign: "center",
    marginBottom: 3,
    fontFamily: "PoppinsBold",
    color: appColors.text
  },
  activeText: {
    fontSize: 30,
    fontFamily: "PoppinsRegular",
    lineHeight: 35,
    color: appColors.purple,
    textAlign: "center"
  },
});
