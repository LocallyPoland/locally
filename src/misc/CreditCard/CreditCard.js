import React, { useMemo } from "react";
import s from "./CreditCard.s";
import {
  View,
  TouchableHighlight,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import SvgUri from "react-native-svg-uri";
import InnerShadowWrapper from "../../wrappers/InnerShadowWrapper/InnerShadowWrapper";
import Swipeable from "react-native-swipeable";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import OuterShadowWrapper from "../../wrappers/OuterShadowWrapper/OuterShadowWrapper";
import classnames from "classnames-react-native";
import CustomImage from "../CustomImage/CustomImage";

const CreditCard = ({
  card = {},
  onlyCardContent,
  containerStyle,
  navigation,
}) => {
  const { number, CVV, date } = card;

  const hiddenNumber = useMemo(() => {
    return `**** **** ${number.toString().slice(15, 20)}`;
  }, [number]);

  const redirectToEdit = () => {
    navigation.navigate("EditCard", { card });
  };

  const rightButtons = useMemo(
    () => [
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={redirectToEdit}
        style={s.swipeButton}
      >
        <Text style={classnames(s.swipeButtonText, s.swipeButtonTextSecondary)}>
          edytuj
        </Text>
      </TouchableOpacity>,
    ],
    [card]
  );
  const leftButtons = useMemo(
    () => [
      <TouchableOpacity activeOpacity={0.6} style={s.swipeButton}>
        <Text style={classnames(s.swipeButtonText, { textAlign: "right" })}>
          usuń
        </Text>
      </TouchableOpacity>,
    ],
    []
  );
  return !onlyCardContent ? (
    <Swipeable
      leftButtonWidth={75}
      rightActionActivationDistance={20}
      leftButtons={leftButtons}
      rightButtons={rightButtons}
    >
      <View style={s.container}>
        <OuterShadowWrapper
          width={wp(25)}
          height={wp(25)}
          //   style={s.iconContainer}
        >
          <View style={s.iconContainer}>
            <CustomImage
              width={wp(17)}
              height={wp(14)}
              source={require("../../../assets/icons/check.svg")}
            />
          </View>
        </OuterShadowWrapper>
        <InnerShadowWrapper style={s.mainContent}>
          <Text style={s.text}>{hiddenNumber}</Text>
          <View style={s.row}>
            <Text style={s.text}>{date}</Text>
            <Image
              source={require("../../../assets/icons/visa.png")}
              style={s.image}
            />
          </View>
        </InnerShadowWrapper>
      </View>
    </Swipeable>
  ) : (
    <InnerShadowWrapper style={classnames(s.mainContent, containerStyle)}>
      <Text style={s.text}>**** **** 2131</Text>
      <View style={s.row}>
        <Text style={s.text}>09/21</Text>
        <Image
          source={require("../../../assets/icons/visa.png")}
          style={s.image}
        />
      </View>
    </InnerShadowWrapper>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  deleteCard: () => {},
});

export default CreditCard;
