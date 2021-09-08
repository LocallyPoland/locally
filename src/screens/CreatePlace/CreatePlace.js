import React, { useCallback, useEffect, useRef } from "react";
import s from "./CreatePlace.s";
import { withFormik } from "formik";
import { connect } from "react-redux";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import { ScrollView, Text, View, Keyboard } from "react-native";
import SvgUri from "react-native-svg-uri";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import OuterShadowWrapper from "../../wrappers/OuterShadowWrapper/OuterShadowWrapper";
import Input from "../../misc/Input/Input";
import Button from "../../misc/Button/Button";
import {
  createPlaceAction,
  editPlaceAction,
} from "../../store/actions/placesActions";
import classnames from "classnames-react-native";
import { showModalAction } from "../../store/actions/baseActions";
import CustomImage from "../../misc/CustomImage/CustomImage";
import { useRoute, useFocusEffect } from "@react-navigation/native";

const CreatePlace = ({
  handleChange,
  handleSubmit,
  values,
  setValues,
  places,
  navigation,
}) => {
  const scrollRef = useRef();
  const route = useRoute();
  const isEditing = !!route.params?.placeId;

  const onKeyboardDidShow = () => {
    scrollRef.current.scrollToEnd();
  };

  // const

  useFocusEffect(
    useCallback(() => {
      // const place = navigation.getParam("place");
      const { placeId } = route.params || {};
      if (placeId) {
        const place = places.find(({ _id }) => placeId === _id);
        setValues({ deliveryAddress: place.deliveryAddress });
      }
    }, [])
  );

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", onKeyboardDidShow);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", onKeyboardDidShow);
    };
  }, []);
  return (
    <MainWrapper style={s.container} onBackPress={navigation.goBack}>
      <ScrollView ref={scrollRef}>
        <View style={{ flex: 1 }}>
          <Text style={s.title}>
            {isEditing ? "Edytuj addres" : "Dodaj addres"}
          </Text>
          <CustomImage
            style={s.plus}
            width={wp(20)}
            height={wp(20)}
            source={require("../../../assets/icons/plus.png")}
          />
          <OuterShadowWrapper height={wp(32)} width={wp(90)} style={s.shadow}>
            <View style={s.infoContainer}>
              <Input
                label="Addres"
                placeholder="ul. Rynek 5"
                onChangeText={handleChange("deliveryAddress")}
                value={values.deliveryAddress}
              />
            </View>
          </OuterShadowWrapper>
          <View style={s.button}>
            <Button
              title={isEditing ? "Zmień" : "Dodaj"}
              onPress={handleSubmit}
              style={s.buttonContainer}
            />
          </View>
        </View>
      </ScrollView>
    </MainWrapper>
  );
};

const formikHOC = withFormik({
  mapPropsToValues: ({ route: { params } }) => ({
    deliveryAddress: "",
  }),
  handleSubmit: async (
    values,
    {
      props: {
        createPlace,
        editPlace,
        navigation,
        showModal,
        route: { params },
      },
      resetForm,
    }
  ) => {
    let isSuccess = false;
    const { placeId } = params || {};
    if (placeId) {
      console.log("values ===", values);
      isSuccess = await editPlace(values, placeId);
    } else {
      isSuccess = await createPlace(values, () =>
        showModal("Bląd tworzenia", "Podczas tworzenia wystąpił problem")
      );
    }
    if (isSuccess) {
      resetForm({
        deliveryAddress: "",
      });
      navigation.goBack();
    }
  },
})(CreatePlace);

const mapStateToProps = (state) => ({
  places: state.places.all,
});
const mapDispatchToProps = (dispatch) => ({
  createPlace: (place, onReject) =>
    dispatch(createPlaceAction(place, onReject)),
  showModal: (title, desc) => dispatch(showModalAction(title, desc)),
  editPlace: (place, id) => dispatch(editPlaceAction(place, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
