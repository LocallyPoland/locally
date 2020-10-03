import React, { useMemo } from "react";
import s from "./Step3.s";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import ScrollPicker from "../../../misc/ScrollPicker/ScrollPicker";
import StepWrapper from "../../../wrappers/StepWrapper/StepWrapper";
import SvgUri from "react-native-svg-uri";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Button from "../../../misc/Button/Button";
import { withFormik } from "formik";
import AdaptiveWrapper from "../../../wrappers/AdaptiveWrapper/AdaptiveWrapper";
import CustomImage from "../../../misc/CustomImage/CustomImage";

const Step3 = ({ values, setValues, onSubmit, stepNumber, errors }) => {
  const { hours: selectedHours, minutes: selectedMinutes } =
    values.deliveryTime || {};
  const onHoursChange = (hours) => {
    setValues({
      ...values,
      deliveryTime: {
        hours,
        minutes: selectedMinutes,
      },
    });
  };
  const onMinutesChange = (minutes) => {
    setValues({
      ...values,
      deliveryTime: {
        hours: selectedHours,
        minutes,
      },
    });
  };

  console.log("values ===", values);
  console.log("selectedMinutes ===", selectedMinutes);
  console.log("selectedHours ===", selectedHours);

  return (
    <View>
      <View style={s.inner}>
        <AdaptiveWrapper minWidthToShow={380}>
          <View style={s.imageContainer}>
            <CustomImage
              width={wp(45)}
              height={wp(45)}
              source={require("../../../../assets/login-image.png")}
            />
          </View>
        </AdaptiveWrapper>
        <Text style={s.text}>
          <Text style={s.textBold}>Wpisz godzine</Text> na którą przesyłka ma
          być dostarczona
        </Text>
        <View style={s.pickersContainer}>
          <ScrollPicker
            activeItem={selectedHours}
            setActiveItem={onHoursChange}
            numberOfItems={25}
            title="godz."
          />
          <CustomImage source={require("../../../../assets/icons/dots.png")} />
          <ScrollPicker
            activeItem={selectedMinutes}
            itemsStep={5}
            setActiveItem={onMinutesChange}
            numberOfItems={13}
            title="min."
          />
        </View>
      </View>
      <Button
        onPress={onSubmit}
        style={s.button}
        disabled={errors.deliveryTime}
        textStyle={s.buttonText}
        title={`Następny krok`}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
