import React from "react";
import s from "./Step1.s";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SvgUri from "react-native-svg-uri";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Button from "../../../misc/Button/Button";
import Input from "../../../misc/Input/Input";
import AdaptiveWrapper from "../../../wrappers/AdaptiveWrapper/AdaptiveWrapper";
import { mwp } from "../../../utils/utils";

const Step1 = ({ handleChange, values, onSubmit, stepNumber }) => {
  return (
    <View>
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
          {[...Array(50)].map((_, i) => (
            <TouchableOpacity key={i} style={s.autocompleteItem}>
              <SvgUri
                width={wp(7)}
                height={wp(13)}
                source={require("../../../../assets/icons/Subtract.svg")}
              />
              <Text style={s.autocompleteItemText}>ul. Rynek 5</Text>
              <Text style={s.autocompleteItemTextSecondary}>Głusk</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Button
        onPress={onSubmit}
        style={s.button}
        textStyle={s.buttonText}
        title={`Następny krok > 0${stepNumber + 1}`}
      />
    </View>
  );
};

export default Step1;
