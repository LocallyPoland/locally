import React from "react";
import s from "./BottomViewWrapper.s";
import { View } from "react-native";

const BottomViewWrapper = ({ children, style, ...rest }) => {
  return (
    <View style={{ ...s.container, ...style }} {...rest}>
      {children}
    </View>
  );
};

export default BottomViewWrapper;
