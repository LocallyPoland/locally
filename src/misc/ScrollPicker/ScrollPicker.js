import React, { useEffect, useMemo, useRef, useState } from "react";
import s from "./ScrollPicker.s";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import classnames from "classnames-react-native";
import InnerShadowWrapper from "../../wrappers/InnerShadowWrapper/InnerShadowWrapper";

const ScrollPicker = ({
  numberOfItems = 50,
  activeItem = 1,
  setActiveItem = () => {},
  title,
  itemsStep = 1,
}) => {
  const [itemHeight, setItemHeight] = useState(0);

  const data = useMemo(() => {
    return [...Array(numberOfItems).keys()].map((item, id) => ({
      id,
      title: `${item * itemsStep}`,
    }));
  }, [numberOfItems, itemsStep]);

  const scrollRef = useRef();

  const onScroll = ({ nativeEvent }) => {
    const { y } = nativeEvent.contentOffset;
    const { height: layoutHeight } = nativeEvent.layoutMeasurement;
    console.log("step ===", itemsStep);
    console.log("y ===", y);
    if (y === 0) {
      setActiveItem(0);
      return;
    }
    const value =
      Math.floor(y / itemHeight) + Math.floor(layoutHeight / itemHeight / 2);
    setActiveItem(value * itemsStep);
    console.log("active ===", value);
    console.log("hgsdjhfjkd g=== ", y, itemHeight);
  };

  const onMomentumScrollEnd = ({ nativeEvent }) => {
    // scrollRef.current.scrollToIndex({
    //   index: activeItem !== 0 ? activeItem / itemsStep - 1 : 0,
    // });
  };

  console.log("active ===", activeItem);
  console.log("step ===", itemsStep);

  return (
    <View>
      {!!title && <Text style={s.title}>{title}</Text>}
      <InnerShadowWrapper style={s.container}>
        <FlatList
          ref={scrollRef}
          {...{ onScroll }}
          {...{ data }}
          {...{ onMomentumScrollEnd }}
          initialScrollIndex={
            Math.round(activeItem / itemsStep) !== 0
              ? Math.round(activeItem / itemsStep) - 1
              : 0
          }
          getItemLayout={(data, index) => ({
            length: itemHeight,
            offset: itemHeight * index,
            index,
          })}
          showsVerticalScrollIndicator={false}
          //   stickyHeaderIndices={[0]}
          style={s.list}
          renderItem={(el) => {
            const { item, onPress = () => {}, index } = el;
            return (
              <TouchableOpacity
                onLayout={({ nativeEvent }) => {
                  if (!itemHeight) {
                    setItemHeight(nativeEvent.layout.height);
                  }
                }}
                style={classnames(
                  s.item,
                  [s.activeItem, `${activeItem}` === item.title],
                  [s.firstItem, index === 0],
                  [s.lastItem, index === numberOfItems - 1]
                )}
                onPress={onPress}
              >
                <Text
                  style={classnames(s.text, [
                    s.activeText,
                    `${activeItem}` === item.title,
                  ])}
                >
                  {item.title}
                </Text>
                <View style={s.lines}>
                  <View style={s.line} />
                  <View
                    style={classnames(s.line, s.mainLine, [
                      s.activeLine,
                      `${activeItem}` === item.title,
                    ])}
                  />
                  <View style={s.line} />
                  <View style={s.line} />
                  <View style={s.line} />
                  <View style={s.line} />
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </InnerShadowWrapper>
    </View>
  );
};

export default ScrollPicker;
