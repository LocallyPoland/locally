import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Dimensions } from "react-native";
import { Platform } from "react-native-web";

const AdaptiveWrapper = ({
  children,
  minWidthToShow = 0,
  minHeightToShow = 0,
}) => {
  if (Platform.OS !== "Android") {
    return children;
  }
  return wp(100) > minWidthToShow && hp(100) > minHeightToShow && children;
};

export default AdaptiveWrapper;
