import React, { useMemo } from "react";
import s from "./HistoryItem.s";
import { View, Text, Image } from "react-native";
import OuterShadowWrapper from "../../wrappers/OuterShadowWrapper/OuterShadowWrapper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import classnames from "classnames-react-native";
import SvgUri from "react-native-svg-uri";

const HistoryItem = ({ item = {}, onlyBaseInfo, containerStyle }) => {
  const { number, status, maxWeight, maxHeight, address, price } = item;
  const statusText = useMemo(() => {
    switch (status) {
      case "coming":
        return "w trakcie";
      case "came":
        return "zakonczone";
      default:
        break;
    }
  }, [status]);
  const isActive = status === "coming";
  return !onlyBaseInfo ? (
    <OuterShadowWrapper style={s.container} height={wp(60)} width={wp(80)}>
      <View style={s.inner}>
        <View>
          <View style={s.header}>
            <Text
              style={classnames(
                s.title,
                [s.titleActive, isActive],
                [s.textNotActive, !isActive]
              )}
            >
              Zamowienie n.{number}
            </Text>
            <Text
              style={classnames(
                s.text,
                [s.titleActive, isActive],
                [s.textNotActive, !isActive]
              )}
            >
              {statusText}
            </Text>
          </View>
          <View style={s.row}>
            <Text
              style={classnames(
                s.bold,
                [s.textActive, isActive],
                [s.textNotActive, !isActive]
              )}
            >
              Paczka
            </Text>
            <View style={s.rowMainContent}>
              {!!maxWeight && (
                <View style={s.rowSection}>
                  <View>
                    <Text
                      style={classnames(
                        s.label,
                        [s.textActive, isActive],
                        [s.textNotActive, !isActive]
                      )}
                    >
                      waga do:
                    </Text>
                    <Text
                      style={classnames(
                        s.bold,
                        [s.textActive, isActive],
                        [s.textNotActive, !isActive]
                      )}
                    >
                      {maxWeight}kg
                    </Text>
                  </View>
                </View>
              )}
              {!!maxHeight && (
                <View style={s.rowSection}>
                  <View>
                    <Text
                      style={classnames(
                        s.label,
                        [s.textActive, isActive],
                        [s.textNotActive, !isActive]
                      )}
                    >
                      rozmiar do:
                    </Text>
                    <Text
                      style={classnames(
                        s.bold,
                        [s.textActive, isActive],
                        [s.textNotActive, !isActive]
                      )}
                    >
                      {maxHeight}cm
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </View>
          <View style={s.row}>
            <Text
              style={classnames(
                s.bold,
                [s.textActive, isActive],
                [s.textNotActive, !isActive]
              )}
            >
              Adresy
            </Text>
            <View style={s.rowMainContent}>
              <View style={s.rowSection}>
                <View style={s.addressContainer}>
                  <View style={s.addressColumn}>
                    <Text
                      style={classnames(
                        s.floatRight,
                        s.label,
                        [s.textActive, isActive],
                        [s.textNotActive, !isActive]
                      )}
                    >
                      z
                    </Text>
                    <Text
                      style={classnames(
                        s.floatRight,
                        s.label,
                        [s.textActive, isActive],
                        [s.textNotActive, !isActive]
                      )}
                    >
                      do
                    </Text>
                  </View>
                  <View style={classnames(s.addressColumn, s.imageContainer)}>
                    <Image
                      style={s.image}
                      source={require("../../../assets/icons/Group-90.png")}
                    />
                  </View>
                  <View style={s.addressColumn}>
                    <Text
                      style={classnames(
                        s.bold,
                        s.addressValue,
                        [s.textActive, isActive],
                        [s.textNotActive, !isActive]
                      )}
                    >
                      {address.from}
                    </Text>
                    <Text
                      style={classnames(
                        s.bold,
                        s.addressValue,
                        [s.textActive, isActive],
                        [s.textNotActive, !isActive]
                      )}
                      numberOfLines={1}
                    >
                      {address.to}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={classnames(
            s.bold,
            s.priceText,
            [s.titleActive, isActive],
            [s.textNotActive, !isActive]
          )}
        >
          {price} zł
        </Text>
      </View>
    </OuterShadowWrapper>
  ) : (
    <View style={containerStyle}>
      <View style={s.row}>
        <Text
          style={classnames(
            s.bold,
            [s.textActive, isActive],
            [s.textNotActive, !isActive]
          )}
        >
          Paczka
        </Text>
        <View style={s.rowMainContent}>
          {!!maxWeight && (
            <View style={s.rowSection}>
              <View>
                <Text
                  style={classnames(
                    s.label,
                    [s.textActive, isActive],
                    [s.textNotActive, !isActive]
                  )}
                >
                  waga do:
                </Text>
                <Text
                  style={classnames(
                    s.bold,
                    [s.textActive, isActive],
                    [s.textNotActive, !isActive]
                  )}
                >
                  {maxWeight}kg
                </Text>
              </View>
            </View>
          )}
          {!!maxHeight && (
            <View style={s.rowSection}>
              <View>
                <Text
                  style={classnames(
                    s.label,
                    [s.textActive, isActive],
                    [s.textNotActive, !isActive]
                  )}
                >
                  rozmiar do:
                </Text>
                <Text
                  style={classnames(
                    s.bold,
                    [s.textActive, isActive],
                    [s.textNotActive, !isActive]
                  )}
                >
                  {maxHeight}cm
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
      <View style={s.row}>
        <Text
          style={classnames(
            s.bold,
            [s.textActive, isActive],
            [s.textNotActive, !isActive]
          )}
        >
          Adresy
        </Text>
        <View style={s.rowMainContent}>
          <View style={s.rowSection}>
            <View style={s.addressContainer}>
              <View style={s.addressColumn}>
                <Text
                  style={classnames(
                    s.floatRight,
                    s.label,
                    [s.textActive, isActive],
                    [s.textNotActive, !isActive]
                  )}
                >
                  z
                </Text>
                <Text
                  style={classnames(
                    s.floatRight,
                    s.label,
                    [s.textActive, isActive],
                    [s.textNotActive, !isActive]
                  )}
                >
                  do
                </Text>
              </View>
              <View style={classnames(s.addressColumn, s.imageContainer)}>
                <Image
                  style={s.image}
                  source={require("../../../assets/icons/Group-90.png")}
                />
              </View>
              <View style={s.addressColumn}>
                <Text
                  style={classnames(
                    s.bold,
                    s.addressValue,
                    [s.textActive, isActive],
                    [s.textNotActive, !isActive]
                  )}
                >
                  {address.from}
                </Text>
                <Text
                  style={classnames(
                    s.bold,
                    s.addressValue,
                    { transform: [{ translateY: 4 }] },
                    [s.textActive, isActive],
                    [s.textNotActive, !isActive]
                  )}
                  numberOfLines={1}
                >
                  {address.to}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text
        style={classnames(
          s.bold,
          s.priceText,
          [s.titleActive, isActive],
          [s.textNotActive, !isActive]
        )}
      >
        {price} zł
      </Text>
    </View>
  );
};

export default HistoryItem;
