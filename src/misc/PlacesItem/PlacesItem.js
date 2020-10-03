import React, { useMemo } from "react";
import s from "./PlacesItem.s";
import OuterShadowWrapper from "../../wrappers/OuterShadowWrapper/OuterShadowWrapper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Image, Text, TouchableOpacity, View } from "react-native";
import InnerShadowWrapper from "../../wrappers/InnerShadowWrapper/InnerShadowWrapper";
import Swipeable from "react-native-swipeable";
import classnames from "classnames-react-native";
import { deletePlaceAction } from "../../store/actions/placesActions";
import { connect } from "react-redux";
import CustomImage from "../CustomImage/CustomImage";

const PlacesItem = ({ deletePlace, place, navigation }) => {
  const { deliveryAddress, _id } = place;
  console.log("place item ===", place);
  const deletePlaceHandler = () => deletePlace(_id);
  const editPlaceHandler = () =>
    navigation.navigate("CreatePlace", {
      placeId: _id,
    });

  const rightButtons = useMemo(() => {
    return [
      <TouchableOpacity onPress={editPlaceHandler} style={s.swipeButton}>
        <Text style={classnames(s.swipeButtonText, s.swipeButtonTextSecondary)}>
          edytuj
        </Text>
      </TouchableOpacity>,
    ];
  }, []);
  const leftButtons = useMemo(() => {
    return [
      <TouchableOpacity onPress={deletePlaceHandler} style={s.swipeButton}>
        <Text
          style={classnames(s.swipeButtonText, {
            textAlign: "right",
          })}
        >
          usuń
        </Text>
      </TouchableOpacity>,
    ];
  }, []);
  return (
    <Swipeable
      leftButtonWidth={75}
      rightActionActivationDistance={20}
      leftButtons={leftButtons}
      rightButtons={rightButtons}
    >
      <View style={s.container}>
        <OuterShadowWrapper
          width={wp(23)}
          height={wp(23)}
          //   style={s.iconContainer}
        >
          <View style={s.iconContainer}>
            <CustomImage
              width={wp(17)}
              height={wp(14)}
              source={require("../../../assets/icons/check.png")}
            />
          </View>
        </OuterShadowWrapper>
        <InnerShadowWrapper style={s.mainContent}>
          <Text style={s.text}>{deliveryAddress}</Text>
        </InnerShadowWrapper>
      </View>
    </Swipeable>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deletePlace: (id) => dispatch(deletePlaceAction(id)),
});

export default connect(null, mapDispatchToProps)(PlacesItem);
