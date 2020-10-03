import React, { useEffect, useState } from "react";
import s from "./Step2.s";
import StepWrapper from "../../../wrappers/StepWrapper/StepWrapper";
import { withFormik } from "formik";
import { connect } from "react-redux";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import SvgUri from "react-native-svg-uri";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Input from "../../../misc/Input/Input";
import Button from "../../../misc/Button/Button";
import AdaptiveWrapper from "../../../wrappers/AdaptiveWrapper/AdaptiveWrapper";
import { mwp } from "../../../utils/utils";
import CustomImage from "../../../misc/CustomImage/CustomImage";

const Step2 = ({
  handleChange,
  values,
  setValues,
  onSubmit,
  stepNumber,
  errors,
  places,
}) => {
  const [filteredPlaces, setFilteredPlaces] = useState(places || []);

  const onPlaceSelect = (place) => {
    const { deliveryAddress } = place;
    setValues({
      ...values,
      deliveryAddress,
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
    filterPlaces(values.deliveryAddress);
  }, [values.deliveryAddress]);

  console.log("values step2 ===", values);
  return (
    <ScrollView>
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
          <Text style={s.textBold}>Wpisz adres</Text> dokąd przesyłka ma być
          dostarczona
        </Text>
      </View>
      <Input
        inputContainerStyle={s.inputContainer}
        inputStyle={s.input}
        onChangeText={handleChange("deliveryAddress")}
        value={values.deliveryAddress}
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
              <Text style={s.autocompleteItemTextSecondary}>Rzeczow</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <Button
        onPress={onSubmit}
        style={s.button}
        disabled={errors.delivery}
        textStyle={s.buttonText}
        title={`Następny krok`}
      />
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  places: state.places.all,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
