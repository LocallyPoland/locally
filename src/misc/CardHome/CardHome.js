import React from "react";
import s from "./CardHome.s";
import InnerShadowWrapper from "../../wrappers/InnerShadowWrapper/InnerShadowWrapper";
import SvgUri from "react-native-svg-uri";
import { Text, TouchableHighlight, View } from "react-native";
import { appColors } from "../../styles/styles";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { mwp } from "../../utils/utils";

const svgOptions = {
  width: mwp(10, 70, 40),
  height: mwp(10, 70, 40),
};

const Wrapper = ({ children, style, ...rest }) => (
  <TouchableHighlight
    style={{ ...s.cardContainer, ...style }}
    underlayColor={appColors.lightPurple}
    {...rest}
  >
    <View>{children}</View>
  </TouchableHighlight>
);

const CardHome = ({ icon, text, redirect }) => {
  return (
    <InnerShadowWrapper {...{ Wrapper }} onPress={redirect}>
      <View style={s.card}>
        <SvgUri {...svgOptions} source={icon} />
        <Text style={s.cardTitle}>{text}</Text>
      </View>
    </InnerShadowWrapper>
  );
};

export default CardHome;
