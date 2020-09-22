import React, { useEffect } from "react";
import s from "./StepWrapper.s";
import MainWrapper from "../MainWrapper/MainWrapper";
import {
  TouchableWithoutFeedback,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import classnames from "classnames-react-native";
import { BoxShadow } from "react-native-shadow";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Button from "../../misc/Button/Button";

const shadowOpt = {
  width: wp(100),
  height: hp(18),
  color: "#b0c3d2",
  border: 50,
  radius: 25,
  opacity: 0.5,
  x: 0,
  y: 3,
  style: { marginVertical: 5, position: "absolute" },
};

const StepWrapper = ({
  stepNumber = 1,
  title = "Dostawa na określoną godzinę",
  children,
  style,
  numberOfSteps,
  setStepNumber,
  onBackPress,
}) => {
  const redirectToStep = (number) => setStepNumber(number || stepNumber + 1);

  useEffect(() => {}, []);

  return (
    <MainWrapper {...{ onBackPress }}>
      <BoxShadow style={s.headerContainer} setting={shadowOpt}>
        <View style={s.header}>
          <View>
            <Text style={s.headerText}>Krok 0{stepNumber}</Text>
            <View style={s.stepsContainer}>
              {[...Array(numberOfSteps)].map((_, i) => {
                return (
                  <TouchableWithoutFeedback
                    key={i}
                    onPress={() => redirectToStep(i + 1)}
                  >
                    <View style={s.step} key={`step${i}`}>
                      <View
                        style={classnames(s.stepCircle, [
                          s.activeCircle,
                          stepNumber === i + 1,
                        ])}
                      >
                        {stepNumber === i + 1 && (
                          <View style={s.stepCircleInner} />
                        )}
                      </View>
                      {i !== numberOfSteps - 1 && <View style={s.stepLine} />}
                    </View>
                  </TouchableWithoutFeedback>
                );
              })}
            </View>
          </View>
        </View>
      </BoxShadow>
      <View style={s.titleContainer}>
        <Text style={s.titleStepNumber}>0{stepNumber}</Text>
        <Text style={s.titleText}>{title}</Text>
      </View>
      <View style={classnames(s.inner, style)}>{children}</View>
    </MainWrapper>
  );
};

export default StepWrapper;
