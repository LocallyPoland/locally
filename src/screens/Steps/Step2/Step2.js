import React from "react";
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

const Step2 = ({ handleChange, values, onSubmit, stepNumber, errors }) => {
  console.log("values step2 ===", values);
  return (
    <View>
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
          <Text style={s.textBold}>Wpisz adres</Text> dokąd przesyłka ma być
          dostarczona
        </Text>
      </View>
      <Input
        inputContainerStyle={s.inputContainer}
        inputStyle={s.input}
        onChangeText={handleChange("delivery")}
        value={values.delivery}
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
      <Button
        onPress={onSubmit}
        style={s.button}
        disabled={errors.delivery}
        textStyle={s.buttonText}
        title={`Następny krok ${stepNumber + 1}`}
      />
    </View>
  );
};

const formikHOC = withFormik({
  mapPropsToValues: () => ({}),
})(Step2);

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
