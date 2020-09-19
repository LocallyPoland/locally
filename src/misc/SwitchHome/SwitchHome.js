import React, { useState, useEffect } from "react";
import s from "./SwitchHome.s";
import { Animated, Text, View, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import classnames from "classnames-react-native";
import BottomViewWrapper from "../../wrappers/BottomViewWrapper/BottomViewWrapper";

const SwitchHome = ({ selectedTab, setSelectedTab }) => {
  const [leftBarWidth] = useState(new Animated.Value(wp(50)));
  const getFontFamily = (condition) =>
    condition ? "PoppinsBold" : "PoppinsRegular";
  const rightBarWidth = leftBarWidth.interpolate({
    inputRange: [wp(22), wp(50)],
    outputRange: [wp(50), wp(22)],
  });

  const selectRightTab = () => setSelectedTab(2);
  const selectLeftTab = () => setSelectedTab(1);

  useEffect(() => {
    console.log("selected tab ===", selectedTab);

    Animated.timing(leftBarWidth, {
      duration: 200,
      toValue: selectedTab === 1 ? wp(50) : wp(22),
      useNativeDriver: false,
    }).start();
  }, [selectedTab]);
  return (
    <BottomViewWrapper>
      <View style={s.mainContent}>
        <View style={s.leftContainer}>
          <Text style={s.tabNumber}>0{selectedTab}</Text>
          <TouchableOpacity style={s.barContainer} onPress={selectLeftTab}>
            <Text
              style={{
                ...s.firstTabText,
                fontFamily: getFontFamily(selectedTab === 1),
              }}
            >
              Zamów
            </Text>
            <Animated.View
              style={classnames(s.bar, { width: leftBarWidth }, [
                s.activeBar,
                selectedTab === 1,
              ])}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={s.barContainer} onPress={selectRightTab}>
          <Text
            style={{
              ...s.tabText,
              fontFamily: getFontFamily(selectedTab === 2),
            }}
          >
            Moje konto
          </Text>
          <Animated.View
            style={classnames(s.bar, { width: rightBarWidth }, [
              s.activeBar,
              selectedTab === 2,
            ])}
          />
        </TouchableOpacity>
      </View>
    </BottomViewWrapper>
  );
};

export default SwitchHome;
