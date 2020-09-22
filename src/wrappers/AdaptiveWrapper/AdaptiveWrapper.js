import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Dimensions } from "react-native";

const AdaptiveWrapper = ({ children, minWidthToShow }) => {
  return wp(100) > minWidthToShow && children;
};

export default AdaptiveWrapper;
