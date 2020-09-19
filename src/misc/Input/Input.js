import React from "react";
import s from "./Input.s";
import { View, Text, TextInput } from "react-native";
import InnerShadowWrapper from "../../wrappers/InnerShadowWrapper/InnerShadowWrapper";
import classnames from "classnames-react-native";
import { TextInputMask } from "react-native-masked-text";

const Input = ({
  label = "",
  onChangeText,
  placeholder,
  containerStyle,
  inputContainerStyle,
  inputStyle,
  value = "",
  children,
  mask = "",
  isError,
  ...rest
}) => {
  return !mask ? (
    <View style={classnames(s.container, containerStyle)}>
      <Text style={s.label}>{label}</Text>
      <InnerShadowWrapper
        style={classnames(s.inputContainer, inputContainerStyle, [
          s.error,
          isError,
        ])}
      >
        {children}
        <TextInput
          {...{ placeholder }}
          {...{ onChangeText }}
          {...{ value }}
          style={classnames(s.input, inputStyle)}
          {...rest}
        />
      </InnerShadowWrapper>
    </View>
  ) : (
    <View style={{ ...s.container, ...containerStyle }}>
      <Text style={s.label}>{label}</Text>
      <InnerShadowWrapper
        style={classnames(s.inputContainer, inputContainerStyle)}
      >
        {children}
        <TextInputMask
          type="custom"
          options={{
            mask,
          }}
          style={classnames(s.input, inputStyle)}
          {...{ placeholder }}
          {...{ onChangeText }}
          {...{ value }}
          {...rest}
        />
      </InnerShadowWrapper>
    </View>
  );
};

export default Input;
