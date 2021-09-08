import React, { useState } from "react";
import s from "./Step4.s";
import { connect } from "react-redux";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import HorizontalScrollPicker from "../../../misc/HorizontalScrollPicker/HorizontalScrollPicker";
import Button from "../../../misc/Button/Button";
import OuterShadowWrapper from "../../../wrappers/OuterShadowWrapper/OuterShadowWrapper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import InnerShadowWrapper from "../../../wrappers/InnerShadowWrapper/InnerShadowWrapper";
import classnames from "classnames-react-native";
import { appColors } from "../../../styles/styles";
import CustomImage from "../../../misc/CustomImage/CustomImage";
import ScrollPicker from "../../../misc/ScrollPicker/ScrollPicker";

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
    <View style={s.container}>
      <ScrollView nestedScrollEnabled>
        <View>
          <View style={s.typeSwitchContainer}>
            <View style={s.textContainer}>
              <View style={s.textLine} />
              <Text style={s.text}>
                <Text style={s.textBold}>Wybierz typ </Text>
                przesyłki
              </Text>
            </View>
            {values.parcel !== "box" ? (
              <View style={s.typeSwitchButtons}>
                <OuterShadowWrapper height={wp(20)} width={s.innerShadow.width}>
                  <TouchableOpacity
                    onPress={setBoxType}
                    style={classnames(
                      s.typeSwitchButton,
                      s.typeSwitchButtonActive
                    )}
                  >
                    <View style={s.typeSwitchInner}>
                      <CustomImage
                        style={s.switchButtonIcon}
                        source={require("../../../../assets/icons/box.png")}
                        width={wp(7)}
                        height={wp(7)}
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
                      <CustomImage
                        fill={appColors.darkBlue}
                        style={s.switchButtonIcon}
                        source={require("../../../../assets/icons/mail.png")}
                        width={wp(7)}
                        height={wp(7)}
                      />
                      {/*<Image style={classnames(s.switchButtonIcon, s.switchButtonImage)} source={require("../../../../assets/icons/mail.png")} />*/}
                      <Text style={s.switchButtonText}>List</Text>
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
                      <CustomImage
                        style={s.switchButtonIcon}
                        fill={appColors.darkBlue}
                        source={require("../../../../assets/icons/box.png")}
                        width={wp(7)}
                        height={wp(7)}
                      />
                      <Text style={s.switchButtonText}>Paczka</Text>
                    </View>
                  </TouchableOpacity>
                </InnerShadowWrapper>
                <OuterShadowWrapper height={wp(20)} width={s.innerShadow.width}>
                  <TouchableOpacity
                    onPress={setMailType}
                    style={classnames(
                      s.typeSwitchButton,
                      s.typeSwitchButtonActive
                    )}
                  >
                    <View style={s.typeSwitchInner}>
                      <CustomImage
                        fill={appColors.purple}
                        style={s.switchButtonIcon}
                        source={require("../../../../assets/icons/mail.png")}
                        width={wp(7)}
                        height={wp(7)}
                      />
                      {/*<Image style={classnames(s.switchButtonIcon, s.switchButtonImage)} source={require("../../../../assets/icons/mail.png")} />*/}
                      <Text style={s.switchButtonText}>List</Text>
                    </View>
                  </TouchableOpacity>
                </OuterShadowWrapper>
              </View>
            )}
          </View>

          {values.parcel === "box" ? (
            <>
              <Text style={s.text}>
                <Text style={s.textBold}>Wybierz wagę </Text>
                oraz <Text style={s.textBold}>największy wymiar </Text>
                przesyłki
              </Text>
              <View style={s.pickersContainer}>
                <View style={s.weightContainer}>
                  <ScrollPicker
                    title="kg"
                    numberOfItems={25}
                    activeItem={values.weight}
                    setActiveItem={setActiveWeightItem}
                  />
                </View>
                <View style={s.weightContainer}>
                  <ScrollPicker
                    title="cm"
                    numberOfItems={20}
                    itemsStep={5}
                    activeItem={values.length}
                    setActiveItem={setActiveLengthItem}
                  />
                </View>
              </View>
            </>
          ) : (
            <Text style={s.emptyText}>
              Nie musisz określać gabarytów listu. Aby kontynuować, kliknij
              <Text style={s.textBold}>"Następny krok"</Text>
            </Text>
          )}
        </View>
      </ScrollView>
      <Button
        onPress={onSubmit}
        style={s.button}
        textStyle={s.buttonText}
        disabled={(!values.length || !values.weight) && values.parcel === "box"}
        title="Następny krok"
      />
    </View>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Step4);
