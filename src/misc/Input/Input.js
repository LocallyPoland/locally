import React from "react";
import s from "./Input.s";
import { View, Text, TextInput } from "react-native";
import InnerShadowWrapper from "../../wrappers/InnerShadowWrapper/InnerShadowWrapper";
import classnames from "classnames-react-native";
import { TextInputMask } from "react-native-masked-text";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Input = ({
  label = "",
  onChangeText,
  placeholder,
  reference,
  containerStyle,
  inputContainerStyle,
  inputStyle,
  withoutCapitalize,
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
        style={classnames(
          s.inputContainer,
          inputContainerStyle,
          [s.error, isError],
          [s.capitalize, !withoutCapitalize]
        )}
      >
        {children}
        <TextInput
          ref={reference}
          {...{ placeholder }}
          {...{ onChangeText }}
          {...{ value }}
          placeholderTextColor={"#40404090"}
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
          refInput={reference}
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
