import React, { useEffect, useMemo, useState } from "react";
import s from "./HistoryItem.s";
import { View, Text, Image } from "react-native";
import OuterShadowWrapper from "../../wrappers/OuterShadowWrapper/OuterShadowWrapper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import classnames from "classnames-react-native";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { cancelOrderAction } from "../../store/actions/orderActions";
import { showModalAction } from "../../store/actions/baseActions";

const HistoryItem = ({
  item = {},
  onlyBaseInfo,
  containerStyle,
  cancelOrder,
  showModal,
}) => {
  const {
    number,
    status,
    maxWeight,
    maxHeight,
    address,
    price,
    _id,
    hours,
    minutes,
    createdAt,
  } = item;
  const statusText = useMemo(() => {
    switch (status) {
      case "coming":
        return "w trakcie";
      case "done":
        return "zakonczone";
      default:
        break;
    }
  }, [status]);

  const [isCancelable, setCancelable] = useState(
    new Date(createdAt).getTime() + 180000 > new Date().getTime()
  );

  const cancelOrderHandler = () => {
    showModal(
      "Anulować zamówienie?",
      "Czy na pewno chcesz anulować zamówienie?",
      () => cancelOrder(_id)
    );
  };

  console.log("maxWeight ===", maxWeight);
  console.log("maxHeight ===", maxHeight);
  console.log("isonlybase ===", onlyBaseInfo);

  console.log("isCancelable ===", isCancelable);

  useEffect(() => {
    console.log(
      "new Date(createdAt).getTime() + 180000 ===",
      new Date(createdAt).toLocaleString()
    );
    const cancelableTime = new Date(createdAt).getTime() + 180000;
    const currentTime = new Date().getTime();
    if (cancelableTime > currentTime) {
      setCancelable(true);
      setTimeout(() => {
        setCancelable(false);
      }, cancelableTime - currentTime);
    }
  }, []);

  const isActive = status === "created";
  return !onlyBaseInfo ? (
    <OuterShadowWrapper
      style={s.container}
      height={hp(100) < 1000 ? wp(60) : 300}
      width={wp(80)}
    >
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
          {!!hours || !!minutes ? (
            <View style={s.row}>
              <Text
                style={classnames(
                  s.bold,
                  [s.textActive, isActive],
                  [s.textNotActive, !isActive]
                )}
              >
                Czas
              </Text>
              <View style={s.rowMainContent}>
                {!!hours && (
                  <View style={s.rowSection}>
                    <View>
                      <Text
                        style={classnames(
                          s.label,
                          [s.textActive, isActive],
                          [s.textNotActive, !isActive]
                        )}
                      >
                        godziny:
                      </Text>
                      <Text
                        style={classnames(
                          s.bold,
                          [s.textActive, isActive],
                          [s.textNotActive, !isActive]
                        )}
                      >
                        {hours}
                      </Text>
                    </View>
                  </View>
                )}
                <View style={s.rowSection}>
                  <View>
                    <Text
                      style={classnames(
                        s.label,
                        [s.textActive, isActive],
                        [s.textNotActive, !isActive]
                      )}
                    >
                      minuty:
                    </Text>
                    <Text
                      style={classnames(
                        s.bold,
                        [s.textActive, isActive],
                        [s.textNotActive, !isActive]
                      )}
                    >
                      {minutes}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <View style={s.row}>
              <Text
                style={classnames(
                  s.bold,
                  [s.textActive, isActive],
                  [s.textNotActive, !isActive]
                )}
              >
                Czas
              </Text>
              <View style={s.rowMainContent}>
                <Text
                  style={classnames(
                    s.bold,
                    [s.textActive, isActive],
                    [s.textNotActive, !isActive]
                  )}
                >
                  Jak najszybciej
                </Text>
              </View>
            </View>
          )}
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
        <View style={s.row}>
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
          {isCancelable && (
            <Button
              style={s.cancelButton}
              textStyle={s.cancelButtonText}
              onPress={cancelOrderHandler}
              title="Anuluj"
            />
          )}
        </View>
      </View>
    </OuterShadowWrapper>
  ) : (
    <View style={containerStyle}>
      {(!!maxWeight || !!maxHeight) && (
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
      )}
      {(!!hours || !!minutes) && (
        <View style={s.row}>
          <Text
            style={classnames(
              s.bold,
              [s.textActive, isActive],
              [s.textNotActive, !isActive]
            )}
          >
            Czas
          </Text>
          <View style={s.rowMainContent}>
            {!!hours && (
              <View style={s.rowSection}>
                <View>
                  <Text
                    style={classnames(
                      s.label,
                      [s.textActive, isActive],
                      [s.textNotActive, !isActive]
                    )}
                  >
                    godziny:
                  </Text>
                  <Text
                    style={classnames(
                      s.bold,
                      [s.textActive, isActive],
                      [s.textNotActive, !isActive]
                    )}
                  >
                    {hours}
                  </Text>
                </View>
              </View>
            )}
            {!!minutes && (
              <View style={s.rowSection}>
                <View>
                  <Text
                    style={classnames(
                      s.label,
                      [s.textActive, isActive],
                      [s.textNotActive, !isActive]
                    )}
                  >
                    minuty:
                  </Text>
                  <Text
                    style={classnames(
                      s.bold,
                      [s.textActive, isActive],
                      [s.textNotActive, !isActive]
                    )}
                  >
                    {minutes}
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>
      )}
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

const mapDispatchToProps = (dispatch) => ({
  cancelOrder: (id) => dispatch(cancelOrderAction(id)),
  showModal: (title, desc, onResolve) =>
    dispatch(
      showModalAction(
        title,
        desc,
        () => {},
        onResolve,
        () => {}
      )
    ),
});

export default connect(null, mapDispatchToProps)(HistoryItem);
