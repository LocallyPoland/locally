import React from "react";
import s from "./Button.s";
import { Text, View, TouchableOpacity } from "react-native";
import classnames from "classnames-react-native";

const Button = ({
  title,
  onPress,
  style,
  textStyle,
  children,
  disabled,
  ...rest
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      {...{ onPress }}
      style={classnames(s.button, style, [s.disabled, disabled])}
      {...{ disabled }}
      {...rest}
    >
      <View style={s.buttonInner}>
        {children}
        <Text style={{ ...s.buttonText, ...textStyle }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
