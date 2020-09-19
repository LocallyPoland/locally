import React from "react";
import s from "./OuterShadowWrapper.s";
import { View } from "react-native";
import { BoxShadow } from "react-native-shadow";

const OuterShadowWrapper = ({ children, style, width, height }) => {
  const shadowOpt = {
    width: width + 7,
    height: height - 10,
    color: "#fff",
    border: 15,
    radius: 15,
    opacity: 0.3,
    x: -5,
    y: -5,
    style: { marginVertical: 5 },
  };
  const shadowRightOpt = {
    width: width,
    height: height - 4,
    color: "#C3D7E7",
    border: 10,
    radius: 15,
    opacity: 0.4,
    x: 7,
    y: 15,
    style: { marginVertical: 5 },
  };
  return (
    <View {...{ style }}>
      <BoxShadow setting={shadowRightOpt}>
        <BoxShadow setting={shadowOpt}>
          <View style={{ ...s.container, ...style, ...{ width, height } }}>
            {children}
          </View>
        </BoxShadow>
      </BoxShadow>
    </View>
  );
};

export default OuterShadowWrapper;
