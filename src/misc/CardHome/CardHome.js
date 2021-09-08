import React from "react";
import s from "./CardHome.s";
import InnerShadowWrapper from "../../wrappers/InnerShadowWrapper/InnerShadowWrapper";
import { Text, TouchableHighlight, View, Image } from "react-native";
import { appColors } from "../../styles/styles";
import classnames from "classnames-react-native";

const Wrapper = ({ children, style, fullscreen, ...rest }) => (
  <TouchableHighlight
    style={classnames(s.cardContainer, style, [
      s.cardContainerFullScreen,
      fullscreen,
    ])}
    underlayColor={appColors.lightPurple}
    {...rest}
  >
    <View>{children}</View>
  </TouchableHighlight>
);

const CardHome = ({ fullscreen, redirect, text, icon }) => {
  return (
    <InnerShadowWrapper
      Wrapper={(props) => <Wrapper {...props} {...{ fullscreen }} />}
      onPress={redirect}
    >
      <View style={classnames(s.card, [s.cardFullscreen, fullscreen])}>
        <Image
          style={classnames(s.cardImage, [s.cardImageFullscreen, fullscreen])}
          source={icon}
        />
        <Text
          style={classnames(s.cardTitle, [s.cardTitleFullscreen, fullscreen])}
        >
          {text}
        </Text>
      </View>
    </InnerShadowWrapper>
  );
};

export default CardHome;
