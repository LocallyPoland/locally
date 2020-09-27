import React from "react";
import s from "./MainWrapper.s";
import { View, TouchableHighlight, Text, Image } from "react-native";
import { BoxShadow } from "react-native-shadow";

const shadowOpt = {
  width: 30,
  height: 20,
  color: "#ffffff",
  border: 10,
  radius: 5,
  opacity: 0.4,
  x: -5,
  y: 3,
  style: { marginVertical: 5 },
};
const MainWrapper = ({
  children,
  withoutBackButton,
  title,
  style = {},
  onBackPress = () => {},
}) => {
  return (
    <View style={s.container}>
      {!withoutBackButton && (
        <TouchableHighlight
          style={s.backButtonContainer}
          underlayColor="#E9E9FF99"
          onPress={onBackPress}
        >
          <BoxShadow setting={shadowOpt}>
            <View style={s.backButtonInner}>
              <Image
                width={24}
                height={24}
                source={require("../../../assets/icons/icon-back.png")}
              />
            </View>
          </BoxShadow>
        </TouchableHighlight>
        // </LinearGradient>
      )}
      {!!title && <Text style={s.title}>{title}</Text>}
      <View style={{ ...s.inner, ...style }}>{children}</View>
    </View>
  );
};

export default MainWrapper;
