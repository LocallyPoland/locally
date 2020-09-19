import React, { useEffect } from "react";
import s from "./Places.s";
import { connect } from "react-redux";
import { ScrollView, Text, View } from "react-native";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import PlacesItem from "../../misc/PlacesItem/PlacesItem";
import SvgUri from "react-native-svg-uri";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AddItemView from "../../misc/AddItemView/AddItemView";
import { getPlacesAction } from "../../store/actions/placesActions";
import AdaptiveWrapper from "../../wrappers/AdaptiveWrapper/AdaptiveWrapper";

const Places = ({ navigation, places, getPlaces }) => {
  const redirectToCreatePlace = () => navigation.navigate("CreatePlace");
  return (
    <MainWrapper title="Moje adresy" onBackPress={navigation.goBack}>
      <AdaptiveWrapper>
        <View style={s.imageContainer}>
          <SvgUri
            source={require("../../../assets/icons/Group-83.svg")}
            width={wp(80)}
          />
        </View>
      </AdaptiveWrapper>
      <ScrollView
        style={s.placesContainer}
        contentContainerStyle={s.placesInner}
      >
        {places?.map((place) => (
          <PlacesItem {...{ navigation }} {...{ place }} key={place._id} />
        ))}
        {/*<PlacesItem address="ul. Rynek 1" />*/}
        <AddItemView
          style={s.addItem}
          onPress={redirectToCreatePlace}
          text="Dodaj adress"
        />
      </ScrollView>
    </MainWrapper>
  );
};

const mapStateToProps = (state) => ({
  places: state.places.all,
});
const mapDispatchToProps = (dispatch) => ({
  getPlaces: () => dispatch(getPlacesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Places);
