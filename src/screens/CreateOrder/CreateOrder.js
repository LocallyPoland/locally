import React, { useEffect, useState } from "react";
import s from "./CreateOrder.s";
import { withFormik } from "formik";
import { connect } from "react-redux";
import Step1 from "../Steps/Step1/Step1";
import Step2 from "../Steps/Step2/Step2";
import Step3 from "../Steps/Step3/Step3";
import Step4 from "../Steps/Step4/Step4";
import Step5 from "../Steps/Step5/Step5";
import StepWrapper from "../../wrappers/StepWrapper/StepWrapper";
import { immediateStepNames, stepNames } from "../../utils/utils";
import { createOrderAction } from "../../store/actions/orderActions";
import * as yup from "yup";
import { showModalAction } from "../../store/actions/baseActions"; // for everything

const CreateOrder = (props) => {
  const [stepNumber, setStepNumber] = useState(1);
  const {
    route,
    navigation,
    handleSubmit,
    user,
    validateForm,
    values,
    errors,
  } = props;
  const moveToNextStep = () => setStepNumber(stepNumber + 1);

  // console.log("values ===", values);

  const isImmediateOrder = route?.params?.isImmediateOrder;

  const onBackPress = () => {
    if (stepNumber === 1) {
      return navigation.goBack();
    }
    setStepNumber(stepNumber - 1);
  };

  console.log("errors ===", errors);

  useEffect(() => {
    validateForm();
  }, []);

  return (
    <StepWrapper
      title={
        isImmediateOrder
          ? immediateStepNames[stepNumber - 1]
          : stepNames[stepNumber - 1]
      }
      style={s.container}
      numberOfSteps={isImmediateOrder ? 4 : 5}
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
  mapPropsToValues: ({ user, settings }) => ({
    pickUp: "",
    paymentType: "cash",
    sum: settings.price,
    weight: 0,
    status: "created",
    length: 0,
    parcel: "box",
    deliveryTime: null,
    deliveryAddress: "",
  }),
  handleSubmit: async (
    values,
    { props: { createOrder, user, navigation, showModal } }
  ) => {
    console.log("order values ===", values);
    console.log("user token ===", user.token);
    const isSuccess = await createOrder(values, user.token);
    if (isSuccess) {
      navigation.navigate("Home");
      showModal(
        "Zamówienie zostało utworzone.",
        "Dane zamówienia można przeglądać w historii. Chcesz przejść do historii zamówień.",
        () => {},
        () => navigation.navigate("History"),
        () => {}
      );
    }
  },
  validationSchema: yup.object().shape({
    pickUp: yup.string().required(),
    deliveryAddress: yup.string().required(),
    weight: yup.number(),
    length: yup.number(),
  }),
})(CreateOrder);

const mapStateToProps = (state) => ({
  user: state.profile,
  settings: state.base.settings,
});
const mapDispatchToProps = (dispatch) => ({
  createOrder: (order, token) => dispatch(createOrderAction(order, token)),
  showModal: (
    title,
    desc,
    onClose = () => {},
    onResolve,
    onReject = () => {}
  ) => dispatch(showModalAction(title, desc, onClose, onResolve, onReject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
