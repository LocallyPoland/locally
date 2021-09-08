import React from "react";
import s from "./InnerShadowWrapper.s";
import { View } from "react-native";
import { BoxShadow } from "react-native-shadow";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import classnames from "classnames-react-native";

const shadowOpt = {
  width: wp(100),
  height: 4,
  color: "#C3D7E7",
  border: 10,
  radius: 1,
  opacity: 0.4,
  x: -5,
  y: 0,
};
const shadowBottomOpt = {
  width: 700,
  height: 4,
  color: "#fff",
  border: 10,
  radius: 1,
  opacity: 0.4,
  x: -5,
  y: 0,
};

const shadowLeftOpt = {
  width: 5,
  height: hp(100),
  color: "#C3D7E7",
  border: 10,
  radius: 1,
  opacity: 0.4,
  x: 0,
  y: 0,
};

const shadowRightOpt = {
  width: 5,
  height: hp(100),
  color: "#fff",
  border: 10,
  radius: 1,
  opacity: 0.3,
  x: 0,
  y: 0,
};

const InnerShadowWrapper = ({ children, style, Wrapper, ...rest }) => {
  return (
    <View {...rest} style={classnames(s.container, [style, !Wrapper])}>
      {Wrapper ? (
        <Wrapper {...{ style }} {...rest}>
          <View style={s.topInputShadowContainer}>
            <BoxShadow setting={shadowOpt} />
          </View>
          <View style={s.leftInputShadowContainer}>
            <BoxShadow setting={shadowLeftOpt} />
          </View>
          <View style={s.bottomInputShadowContainer}>
            <BoxShadow setting={shadowBottomOpt} />
          </View>
          <View style={s.rightInputShadowContainer}>
            <BoxShadow setting={shadowRightOpt} />
          </View>
          {children}
        </Wrapper>
      ) : (
        <>
          <View style={s.topInputShadowContainer}>
            <BoxShadow setting={shadowOpt} />
          </View>
          <View style={s.leftInputShadowContainer}>
            <BoxShadow setting={shadowLeftOpt} />
          </View>
          <View style={s.bottomInputShadowContainer}>
            <BoxShadow setting={shadowBottomOpt} />
          </View>
          <View style={s.rightInputShadowContainer}>
            <BoxShadow setting={shadowRightOpt} />
          </View>
          {children}
        </>
      )}
    </View>
  );
};

export default InnerShadowWrapper;
