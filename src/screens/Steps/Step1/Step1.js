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
import CustomImage from "../../../misc/CustomImage/CustomImage";

const Step1 = ({
  handleChange,
  values,
  onSubmit,
  stepNumber,
  errors,
  places,
  setValues,
}) => {
  const [filteredPlaces, setFilteredPlaces] = useState(places || []);

  const onPlaceSelect = (place) => {
    const { deliveryAddress } = place;
    setValues({
      ...values,
      pickUp: deliveryAddress,
    });
  };

  const filterPlaces = (text) => {
    setFilteredPlaces(
      places.filter((place) => {
        const { deliveryAddress } = place;
        return deliveryAddress?.includes(text);
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
          {/*<AdaptiveWrapper minWidthToShow={350}>*/}
          <CustomImage
            width={mwp(60)}
            height={mwp(50)}
            source={require("../../../../assets/icons/Group-63.png")}
          />
          {/*</AdaptiveWrapper>*/}
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
            <CustomImage
              width={wp(4)}
              height={wp(10)}
              source={require("../../../../assets/icons/Group-82.png")}
            />
          </View>
        </Input>
        <ScrollView style={s.autocompleteContainer}>
          {/*[{"__v": 0, "_id": "5f68b1e54bb01800171d959e", "createdAt": "2020-09-21T14:00:05.334Z", "deliveryApartament": "8", "deliveryCity": "Rzeszow", "deliveryHouse": "52", "deliveryStreet": "Rynek", "updatedAt": "2020-09-21T14:00:05.334Z"}]*/}
          {filteredPlaces.map((place) => {
            const { id, deliveryAddress } = place;
            return (
              <TouchableOpacity
                key={id}
                style={s.autocompleteItem}
                onPress={() => onPlaceSelect(place)}
              >
                <CustomImage
                  width={wp(7)}
                  height={wp(13)}
                  source={require("../../../../assets/icons/Subtract.png")}
                />
                <Text style={s.autocompleteItemText}>{deliveryAddress}</Text>
                <Text style={s.autocompleteItemTextSecondary}>Rzeszów</Text>
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
        title={`Następny krok`}
      />
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  places: state.places.all,
});

export default connect(mapStateToProps, null)(Step1);
