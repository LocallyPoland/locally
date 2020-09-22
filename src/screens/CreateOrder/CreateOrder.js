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
import * as yup from "yup"; // for everything

const CreateOrder = (props) => {
  const [stepNumber, setStepNumber] = useState(1);
  const { route, navigation, handleSubmit, user, validateForm } = props;
  const moveToNextStep = () => setStepNumber(stepNumber + 1);

  const isImmediateOrder = route?.params?.isImmediateOrder;

  const onBackPress = () => {
    if (stepNumber === 1) {
      return navigation.goBack();
    }
    setStepNumber(stepNumber - 1);
  };

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
  mapPropsToValues: ({ user }) => ({
    // delivery: "",
    pickUp: "",
    paymentType: "cash",
    userID: user._id,
    sum: 0,
    weight: 0,
    status: "done",
    length: 0,
    parcel: "box",
    deliveryTime: {
      hours: 12,
      minutes: 30,
    },
    deliveryCity: "Rzeszow",
    deliveryStreet: "",
    deliveryHouse: "",
  }),
  handleSubmit: (values, { props: { createOrder, user } }) => {
    console.log("order values ===", values);
    console.log("user token ===", user.token);
    createOrder(values, user.token);
  },
  validationSchema: yup.object().shape({
    pickUp: yup.string().required(),
    userID: yup.string().required(),
    deliveryCity: yup.string().required(),
    deliveryStreet: yup.string().required(),
    deliveryHouse: yup.string().required(),
    weight: yup.number(),
    length: yup.number(),
  }),
})(CreateOrder);

const mapStateToProps = (state) => ({
  user: state.profile,
});
const mapDispatchToProps = (dispatch) => ({
  createOrder: (order, token) => dispatch(createOrderAction(order, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
