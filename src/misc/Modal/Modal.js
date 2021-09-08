import React, { useEffect } from "react";
import s from "./Modal.s";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  Image,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { hideModalAction } from "../../store/actions/baseActions";
import Button from "../Button/Button";
import { BlurView } from "expo-blur";
import classnames from "classnames-react-native";

const Modal = ({
  isVisible,
  title,
  desc,
  hideModal,
  onClose = () => {},
  onReject,
  onResolve,
}) => {
  const hideModalHandler = () => {
    onClose();
    LayoutAnimation.configureNext({
      ...LayoutAnimation.Presets.spring,
      duration: 150,
    });
    hideModal();
  };

  const rejectHandler = () => {
    if (onReject) {
      onReject();
    }
    hideModalHandler();
  };

  const resolveHandler = () => {
    if (onResolve) {
      onResolve();
    }
    hideModalHandler();
  };

  useEffect(() => {
    if (
      Platform.OS === "android" &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  return (
    !!isVisible && (
      <BlurView
        tint="dark"
        intensity={100}
        style={{ ...StyleSheet.absoluteFill }}
      >
        <View style={s.overlay}>
          <View style={s.modal}>
            <View style={s.modalContent}>
              <Text style={s.title}>{title}</Text>
              <Text style={s.desc}>{desc}</Text>
            </View>
            <View style={s.row}>
              {typeof onResolve === "function" && (
                <Button
                  title="Tak"
                  onPress={resolveHandler}
                  style={s.resolveButton}
                />
              )}
              {typeof onReject === "function" && (
                <Button
                  title="Nie"
                  textStyle={s.buttonText}
                  onPress={rejectHandler}
                  style={s.rejectButton}
                />
              )}
            </View>
            {!onResolve && (
              <Button
                style={s.button}
                textStyle={s.buttonText}
                title="Zamknij"
                onPress={hideModalHandler}
              />
            )}
          </View>
        </View>
      </BlurView>
    )
  );
};

const mapStateToProps = (state) => ({
  isVisible: state.base.modal.isVisible,
  title: state.base.modal.title,
  desc: state.base.modal.desc,
  onClose: state.base.modal.onClose,
  onResolve: state.base.modal.onResolve,
  onReject: state.base.modal.onReject,
});
const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModalAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
