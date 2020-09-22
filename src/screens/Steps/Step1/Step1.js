import React, { useEffect, useState } from "react";
import s from "./Step1.s";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import SvgUri from "react-native-svg-uri";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Button from "../../../misc/Button/Button";
import Input from "../../../misc/Input/Input";
import AdaptiveWrapper from "../../../wrappers/AdaptiveWrapper/AdaptiveWrapper";
import { mwp } from "../../../utils/utils";
import { connect } from "react-redux";

const Step1 = ({
  handleChange,
  values,
  onSubmit,
  stepNumber,
  errors,
  places,
  setValues,
}) => {
  console.log("places ===", places);
  const [filteredPlaces, setFilteredPlaces] = useState(places || []);

  const onPlaceSelect = (place) => {
    const { deliveryApartament, deliveryHouse, deliveryStreet } = place;
    setValues({
      ...values,
      pickUp: `ul. ${deliveryStreet} ${deliveryHouse} ${
        !!deliveryApartament && "/"
      } ${deliveryApartament}`,
    });
  };

  const filterPlaces = (text) => {
    setFilteredPlaces(
      places.filter((place) => {
        const { deliveryApartament, deliveryHouse, deliveryStreet } = place;
        return (
          deliveryApartament?.includes(text) ||
          deliveryHouse.includes(text) ||
          deliveryStreet.includes(text)
        );
      })
    );
  };

  useEffect(() => {
    filterPlaces(values.pickUp);
  }, [values.pickUp]);
  return (
    <ScrollView>
      <View style={s.inner}>
        <View style={s.imageContainer}>
          <AdaptiveWrapper minWidthToShow={350}>
            <SvgUri
              width={mwp(60)}
              height={mwp(50)}
              source={require("../../../../assets/icons/Group-63.svg")}
            />
          </AdaptiveWrapper>
        </View>
        <View style={s.textContainer}>
          <View style={s.textLine} />
          <Text style={s.text}>
            <Text style={s.textBold}>Wpisz adres</Text> gdzie aktualnie znajduje
            się przesyłka
          </Text>
        </View>
        <Input
          inputContainerStyle={s.inputContainer}
          inputStyle={s.input}
          onChangeText={handleChange("pickUp")}
          value={values.pickUp}
          placeholder="ul. Rynek 5"
        >
          <View style={s.inputIconContainer}>
            <SvgUri
              width={wp(6)}
              height={wp(13)}
              source={require("../../../../assets/icons/Group-82.svg")}
            />
          </View>
        </Input>
        <ScrollView style={s.autocompleteContainer}>
          {/*[{"__v": 0, "_id": "5f68b1e54bb01800171d959e", "createdAt": "2020-09-21T14:00:05.334Z", "deliveryApartament": "8", "deliveryCity": "Rzeszow", "deliveryHouse": "52", "deliveryStreet": "Rynek", "updatedAt": "2020-09-21T14:00:05.334Z"}]*/}
          {filteredPlaces.map((place) => {
            const {
              id,
              deliveryApartament,
              deliveryCity,
              deliveryHouse,
              deliveryStreet,
            } = place;
            return (
              <TouchableOpacity
                key={id}
                style={s.autocompleteItem}
                onPress={() => onPlaceSelect(place)}
              >
                <SvgUri
                  width={wp(7)}
                  height={wp(13)}
                  source={require("../../../../assets/icons/Subtract.svg")}
                />
                <Text style={s.autocompleteItemText}>
                  ul. {deliveryStreet} {deliveryHouse}
                  {!!deliveryApartament && " / "}
                  {deliveryApartament}
                </Text>
                <Text style={s.autocompleteItemTextSecondary}>
                  {deliveryCity}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <Button
        onPress={onSubmit}
        style={s.button}
        disabled={errors.pickUp}
        textStyle={s.buttonText}
        title={`Następny krok ${stepNumber + 1}`}
      />
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  places: state.places.all,
});

export default connect(mapStateToProps, null)(Step1);
