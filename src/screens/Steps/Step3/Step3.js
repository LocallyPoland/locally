import React, { useEffect, useMemo } from "react";
import s from "./Step3.s";
import { connect } from "react-redux";
import { Text, View, ScrollView } from "react-native";
import ScrollPicker from "../../../misc/ScrollPicker/ScrollPicker";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Button from "../../../misc/Button/Button";
import AdaptiveWrapper from "../../../wrappers/AdaptiveWrapper/AdaptiveWrapper";
import CustomImage from "../../../misc/CustomImage/CustomImage";

const Step3 = ({
  values,
  setValues,
  onSubmit,
  setErrors,
  errors,
  showModal,
}) => {
  const { hours: selectedHours, minutes: selectedMinutes } =
    values.deliveryTime || {};
    console.log('values', values);

  const submitHandler = () => {
    if (errors.deliveryDate) {
      showModal(
        "Błąd zamówienia",
        "Zamówienie można złożyć nie wcześniej niż za godzinę"
      );
    } else {
      onSubmit();
    }
  };

  const onHoursChange = (hours) => {
    let isError = false;
    const date = new Date();
    if (hours < date.getHours() + 1) {
      isError = true;
    } else if (hours === date.getHours() + 1 && hours < date.getMinutes()) {
      isError = true;
    }
    if (isError) {
      console.log("set errors");
      setErrors({
        ...errors,
        deliveryTime: "time must be at least hour after current time",
      });
    }
    console.log("currentDate ===", new Date().setHours(hours));
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

  useEffect(() => {
    const date = new Date(new Date().toISOString('en-US', { timeZone: 'Europe/Warsaw' }));
    console.log('dateLog:', date);
    date.setHours(selectedHours, selectedMinutes);
    setValues({ ...values, deliveryDate: date });
  }, [selectedHours, selectedMinutes]);

  console.log("errors ===", errors);
  console.log("test time===", new Date(Date.now()));

  return (
    <ScrollView nestedScrollEnabled>
      <View style={s.inner}>
        <View>
          <AdaptiveWrapper minWidthToShow={380}>
            <View style={s.imageContainer}>
              <CustomImage
                width={wp(45)}
                height={wp(45)}
                source={require("../../../../assets/login-image.png")}
              />
            </View>
          </AdaptiveWrapper>
          <View>
            <Text style={s.text}>
              <Text style={s.textBold}>Wpisz godzine</Text> na którą przesyłka
              ma być dostarczona
            </Text>
            <View style={s.pickersContainer}>
              <ScrollPicker
                activeItem={selectedHours}
                setActiveItem={onHoursChange}
                numberOfItems={25}
                title="godz."
              />
              <CustomImage
                source={require("../../../../assets/icons/dots.png")}
              />
              <ScrollPicker
                activeItem={selectedMinutes}
                itemsStep={5}
                setActiveItem={onMinutesChange}
                numberOfItems={13}
                title="min."
              />
            </View>
          </View>
        </View>
        <Button
          onPress={submitHandler}
          style={s.button}
          textStyle={s.buttonText}
          title={`Następny krok`}
        />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
