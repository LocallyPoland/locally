import React, { useState } from "react";
import s from "./Step4.s";
import StepWrapper from "../../../wrappers/StepWrapper/StepWrapper";
import { withFormik } from "formik";
import { connect } from "react-redux";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import HorizontalScrollPicker from "../../../misc/HorizontalScrollPicker/HorizontalScrollPicker";
import Button from "../../../misc/Button/Button";
import OuterShadowWrapper from "../../../wrappers/OuterShadowWrapper/OuterShadowWrapper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import SvgUri from "react-native-svg-uri";
import InnerShadowWrapper from "../../../wrappers/InnerShadowWrapper/InnerShadowWrapper";
import classnames from "classnames-react-native";
import { appColors } from "../../../styles/styles";

const Step4 = ({ values, setValues, onSubmit, stepNumber, errors }) => {
  const setMailType = () => {
    setValues({
      ...values,
      parcel: "mail",
    });
  };
  const setBoxType = () => {
    setValues({
      ...values,
      parcel: "box",
    });
  };

  const setActiveWeightItem = (weight) => {
    setValues({ ...values, weight });
  };
  const setActiveLengthItem = (length) => {
    setValues({ ...values, length });
  };
  return (
    <ScrollView>
      <View style={s.container}>
        <View>
          <View style={s.typeSwitchContainer}>
            <View style={s.textContainer}>
              <View style={s.textLine} />
              <Text style={s.text}>
                <Text style={s.textBold}>Wybierz typ </Text>
                przesyłki
              </Text>
            </View>
            {values.parcel === "box" ? (
              <View style={s.typeSwitchButtons}>
                <OuterShadowWrapper height={wp(20)} width={wp(35)}>
                  <TouchableOpacity
                    onPress={setBoxType}
                    style={classnames(
                      s.typeSwitchButton,
                      s.typeSwitchButtonActive
                    )}
                  >
                    <View style={s.typeSwitchInner}>
                      <SvgUri
                        style={s.switchButtonIcon}
                        source={require("../../../../assets/icons/box.svg")}
                        width={wp(8)}
                        height={wp(8)}
                      />
                      <Text style={s.switchButtonText}>Paczka</Text>
                    </View>
                  </TouchableOpacity>
                </OuterShadowWrapper>
                <InnerShadowWrapper style={s.innerShadow}>
                  <TouchableOpacity
                    onPress={setMailType}
                    style={{ ...s.typeSwitchButton, alignSelf: "center" }}
                  >
                    <View style={s.typeSwitchInner}>
                      <SvgUri
                        fill={appColors.darkBlue}
                        style={s.switchButtonIcon}
                        source={require("../../../../assets/icons/mail.svg")}
                        width={wp(8)}
                        height={wp(8)}
                      />
                      {/*<Image style={classnames(s.switchButtonIcon, s.switchButtonImage)} source={require("../../../../assets/icons/mail.png")} />*/}
                      <Text style={s.switchButtonText}>Lista</Text>
                    </View>
                  </TouchableOpacity>
                </InnerShadowWrapper>
              </View>
            ) : (
              <View style={s.typeSwitchButtons}>
                <InnerShadowWrapper style={s.innerShadow}>
                  <TouchableOpacity
                    underlayColor={appColors.lightGray}
                    onPress={setBoxType}
                    style={s.typeSwitchButton}
                  >
                    <View style={s.typeSwitchInner}>
                      <SvgUri
                        style={s.switchButtonIcon}
                        fill={appColors.darkBlue}
                        source={require("../../../../assets/icons/box.svg")}
                        width={wp(8)}
                        height={wp(8)}
                      />
                      <Text style={s.switchButtonText}>Paczka</Text>
                    </View>
                  </TouchableOpacity>
                </InnerShadowWrapper>
                <OuterShadowWrapper height={wp(20)} width={wp(35)}>
                  <TouchableOpacity
                    onPressIn={setBoxType}
                    style={classnames(
                      s.typeSwitchButton,
                      s.typeSwitchButtonActive
                    )}
                  >
                    <View style={s.typeSwitchInner}>
                      <SvgUri
                        fill={appColors.purple}
                        style={s.switchButtonIcon}
                        source={require("../../../../assets/icons/mail.svg")}
                        width={wp(8)}
                        height={wp(8)}
                      />
                      {/*<Image style={classnames(s.switchButtonIcon, s.switchButtonImage)} source={require("../../../../assets/icons/mail.png")} />*/}
                      <Text style={s.switchButtonText}>Lista</Text>
                    </View>
                  </TouchableOpacity>
                </OuterShadowWrapper>
              </View>
            )}
          </View>
          {values.parcel === "box" ? (
            <View style={s.weightContainer}>
              <View style={{ ...s.textContainer, marginBottom: 10 }}>
                <View style={s.textLine} />
                <Text style={s.text}>
                  <Text style={s.textBold}>Wybierz wagę </Text>
                  przesyłki w wymiarze
                  <Text style={s.textBold}> kg</Text>
                </Text>
              </View>
              <HorizontalScrollPicker
                separator="kg"
                numberOfItems={100}
                activeItem={values.weight}
                setActiveItem={setActiveWeightItem}
              />
            </View>
          ) : (
            <View style={s.weightContainer}>
              <View style={{ ...s.textContainer, marginBottom: 10 }}>
                <View style={s.textLine} />
                <Text style={s.text}>
                  <Text style={s.textBold}>Wybierz maksymalny rozmiar </Text>
                  przesyłki w wymiarze
                  <Text style={s.textBold}> cm</Text>
                </Text>
              </View>
              <HorizontalScrollPicker
                separator="cm"
                numberOfItems={100}
                itemsStep={5}
                activeItem={values.length}
                setActiveItem={setActiveLengthItem}
              />
            </View>
          )}
        </View>
        <Button
          onPress={onSubmit}
          style={s.button}
          textStyle={s.buttonText}
          disabled={errors.length || errors.weight}
          title={`Następny krok ${stepNumber + 1}`}
        />
      </View>
    </ScrollView>
  );
};

const formikHOC = withFormik({
  mapPropsToValues: () => ({
    weight: 1,
    dimensions: 25,
  }),
})(Step4);

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
