import React, { useEffect, useMemo, useState } from "react";
import s from "./CreateOrder.s";
import { withFormik } from "formik";
import { connect } from "react-redux";
import Step1 from "../Steps/Step1/Step1";
import Step2 from "../Steps/Step2/Step2";
import Step3 from "../Steps/Step3/Step3";
import Step4 from "../Steps/Step4/Step4";
import Step5 from "../Steps/Step5/Step5";
import StepWrapper from "../../wrappers/StepWrapper/StepWrapper";
import {
  checkAppDisabled,
  immediateStepNames,
  stepNames,
} from "../../utils/utils";
import { createOrderAction } from "../../store/actions/orderActions";
import * as yup from "yup";
import {
  showModalAction,
  showModalErrorAction,
} from "../../store/actions/baseActions";
import { BackHandler } from "react-native-web";

const CreateOrder = (props) => {
  const [stepNumber, setStepNumber] = useState(1);
  const { route, navigation, handleSubmit, validateForm } = props;
  const moveToNextStep = () => setStepNumber(stepNumber + 1);
  const [stepsHistory, setStepsHistory] = useState([]);

  const isImmediateOrder = route?.params?.isImmediateOrder;

  const onBackPress = () => {
    if (stepNumber === 1) {
      return navigation.goBack();
    }
    setStepNumber(stepNumber - 1);
  };

  const onHardwareBackPress = () => {
    if (stepNumber - 1) {
      return setStepNumber((prev) => prev - 1);
    }
    navigation.goBack();
  };

  useEffect(() => {
    validateForm();
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      onHardwareBackPress
    );
    if (!stepsHistory.includes(stepNumber)) {
      setStepsHistory((prev) => [...prev, stepNumber]);
    }
    return () => backHandler.remove();
  }, [stepNumber]);

  return (
    <StepWrapper
      title={
        isImmediateOrder
          ? immediateStepNames[stepNumber - 1]
          : stepNames[stepNumber - 1]
      }
      style={s.container}
      numberOfSteps={isImmediateOrder ? 4 : 5}
      {...{ stepsHistory }}
      {...{ onBackPress }}
      {...{ stepNumber }}
      {...{ setStepNumber }}
    >
      {isImmediateOrder ? (
        <>
          {stepNumber === 1 && (
            <Step1 {...props} onSubmit={moveToNextStep} {...{ stepNumber }} />
          )}
          {stepNumber === 2 && (
            <Step2 {...props} onSubmit={moveToNextStep} {...{ stepNumber }} />
          )}
          {stepNumber === 3 && (
            <Step4
              {...props}
              stepNumber={3}
              onSubmit={moveToNextStep}
              {...{ stepNumber }}
            />
          )}
          {stepNumber === 4 && (
            <Step5
              {...props}
              isImmediateOrder={isImmediateOrder}
              stepNumber={4}
              onSubmit={handleSubmit}
              {...{ stepNumber }}
            />
          )}
        </>
      ) : (
        <>
          {stepNumber === 1 && (
            <Step1 {...props} onSubmit={moveToNextStep} {...{ stepNumber }} />
          )}
          {stepNumber === 2 && (
            <Step2 {...props} onSubmit={moveToNextStep} {...{ stepNumber }} />
          )}
          {stepNumber === 3 && (
            <Step3 {...props} onSubmit={moveToNextStep} {...{ stepNumber }} />
          )}
          {stepNumber === 4 && (
            <Step4 {...props} onSubmit={moveToNextStep} {...{ stepNumber }} />
          )}
          {stepNumber === 5 && (
            <Step5 {...props} onSubmit={handleSubmit} {...{ stepNumber }} />
          )}
        </>
      )}
    </StepWrapper>
  );
};

const formikHOC = withFormik({
  mapPropsToValues: ({ route, settings }) => {
    const date = new Date(new Date().getTime() + 3600000);
    console.log("date IS ===", date);
    const isImmediateOrder = route?.params?.isImmediateOrder;

    return {
      pickUp: "",
      paymentType: "cash",
      sum: isImmediateOrder ? settings.priceForCustomer : settings.price,
      weight: 10,
      status: "created",
      length: 10,
      parcel: "box",
      deliveryTime: {
        hours: date.getHours(),
        minutes: date.getMinutes(),
      },
      deliveryDate: date,
      deliveryAddress: "",
      comments: "",
    };
  },
  handleSubmit: async (
    values,
    {
      props: {
        createOrder,
        user,
        navigation,
        showModal,
        showErrorModal,
        route,
      },
    }
  ) => {
    if (checkAppDisabled()) {
      showErrorModal();
    }
    const isImmediateOrder = route?.params?.isImmediateOrder;

    const { deliveryTime, parcel } = values;

    let time = null;
    if (!isImmediateOrder && deliveryTime) {
      time = new Date(
        new Date().setHours(+deliveryTime.hours, +deliveryTime.minutes)
      ).toLocaleString('en-US', { timeZone: 'Europe/Warsaw' });
    }

    console.log("timeUTC ===", time);

    const isSuccess = await createOrder(
      { ...values, deliveryTime: time },
      user.token
    );
    if (isSuccess) {
      navigation.navigate("Home");
      showModal(
        "Zamówienie zostało utworzone.",
        "Dane zamówienia można przeglądać w historii. Chcesz przejść do historii zamówień.",
        () => navigation.navigate("History")
      );
    }
  },
  validationSchema: yup.object().shape({
    pickUp: yup.string().required(),
    deliveryAddress: yup.string().required(),
    weight: yup.number(),
    length: yup.number(),
    deliveryDate: yup.date().min(new Date(new Date().getTime() + 3500000)),
  }),
})(CreateOrder);

const mapStateToProps = (state) => ({
  user: state.profile,
  settings: state.base.settings,
});
const mapDispatchToProps = (dispatch) => ({
  createOrder: (order, token) => dispatch(createOrderAction(order, token)),
  showErrorModal: () => dispatch(showModalErrorAction()),
  showModal: (title, desc, onClose) =>
    dispatch(showModalAction(title, desc, onClose, null, null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
