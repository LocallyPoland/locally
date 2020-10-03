import React from "react";
import s from "./AddItemView.s";
import {
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import OuterShadowWrapper from "../../wrappers/OuterShadowWrapper/OuterShadowWrapper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import SvgUri from "react-native-svg-uri";
import InnerShadowWrapper from "../../wrappers/InnerShadowWrapper/InnerShadowWrapper";
import { appColors } from "../../styles/styles";
import classnames from "classnames-react-native";

const AddItemView = ({ text, onPress = () => {}, style, withoutPlus }) => {
  return (
    <TouchableHighlight
      style={classnames(s.container, style)}
      {...{ onPress }}
      underlayColor={appColors.lightPurple}
      activeOpacity={0.7}
    >
      <View style={s.inner}>
        {!withoutPlus && (
          <OuterShadowWrapper width={wp(23)} height={wp(23)}>
            <View style={s.iconContainer}>
              <Image
                style={{ width: wp(23), height: wp(23) }}
                source={require("../../../assets/icons/plus.png")}
              />
            </View>
          </OuterShadowWrapper>
        )}
        <InnerShadowWrapper style={s.mainContent}>
          <Text style={s.text}>{text}</Text>
        </InnerShadowWrapper>
      </View>
    </TouchableHighlight>
  );
};

export default AddItemView;
