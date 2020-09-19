import React from "react";
import s from "./CreatePlace.s";
import { withFormik } from "formik";
import { connect } from "react-redux";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import { ScrollView, Text, View } from "react-native";
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

const CreatePlace = ({
  handleChange,
  handleSubmit,
  values,
  navigation,
  route: { params },
}) => {
  const isEditing = !!params.place;
  return (
    <MainWrapper style={s.container} onBackPress={navigation.goBack}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text style={s.title}>
            {isEditing ? "Zmienić addres" : "Dodaj addres"}
          </Text>
          <SvgUri
            style={s.plus}
            width={wp(20)}
            height={wp(20)}
            source={require("../../../assets/plus.svg")}
          />
          <OuterShadowWrapper height={wp(60)} width={wp(90)} style={s.shadow}>
            <View style={s.infoContainer}>
              <Input
                label="Ulica"
                placeholder="Rynek"
                onChangeText={handleChange("deliveryStreet")}
                value={values.deliveryStreet}
              />

              <View style={s.row}>
                <Input
                  placeholder="42"
                  label="Numer budynku"
                  onChangeText={handleChange("deliveryHouse")}
                  value={values.deliveryHouse}
                  containerStyle={s.input}
                  keyboardType="numeric"
                />
                <Input
                  placeholder="3"
                  label="Numer mieszkania"
                  onChangeText={handleChange("deliveryApartament")}
                  value={values.deliveryApartament}
                  containerStyle={{ ...s.input, marginLeft: 20 }}
                  keyboardType="numeric"
                />
              </View>
            </View>
          </OuterShadowWrapper>
          <View style={s.button}>
            <Button
              title={isEditing ? "Zmienić" : "Dodaj"}
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
  mapPropsToValues: ({ route: { params } }) => {
    const place = params?.place || {};
    return {
      deliveryCity: "Rzeszow",
      deliveryHouse: place.deliveryHouse || "",
      deliveryStreet: place.deliveryStreet || "",
      deliveryApartament: place.deliveryApartament || "",
    };
  },
  handleSubmit: async (
    values,
    {
      props: {
        createPlace,
        editPlace,
        navigation,
        route: { params },
      },
      resetForm,
    }
  ) => {
    let isSuccess = false;
    console.log("place ===", params?.place);
    if (params?.place) {
      isSuccess = await editPlace(values, params.place._id);
    } else {
      isSuccess = await createPlace(values);
    }
    if (isSuccess) {
      navigation.goBack();
      resetForm({
        deliveryCity: "Rzeszow",
        deliveryHouse: "",
        deliveryStreet: "",
        deliveryApartament: "",
      });
    }
  },
})(CreatePlace);

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  createPlace: (place) => dispatch(createPlaceAction(place)),
  editPlace: (place, id) => dispatch(editPlaceAction(place, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
