import React from "react";
import s from "./Step5.s";
import { connect } from "react-redux";
import { ScrollView, Text, View } from "react-native";
import HistoryItem from "../../../misc/HistoryItem/HistoryItem";
import Button from "../../../misc/Button/Button";
import Input from "../../../misc/Input/Input";

const Step5 = ({
  onSubmit,
  cards,
  navigation,
  values,
  errors,
  handleChange,
  showErrorModal,
  isImmediateOrder
}) => {
  const redirectToAddCard = () =>
    navigation.navigate("AddCard", {
      goBack: true,
    });

  const {
    status,
    sum,
    weight,
    length,
    deliveryAddress,
    deliveryDate,
    pickUp,
    parcel,
    comments,
  } = values;

  return (
    // <ScrollView>
    <View style={s.container}>
      <View style={s.inner}>
        <ScrollView>
          <View>
            <HistoryItem
              onlyBaseInfo
              containerStyle={s.infoContainer}
              isImmediateOrder
              item={{
                status,
                price: sum,
                maxWeight: parcel === "box" ? weight : null,
                maxHeight: parcel === "box" ? length : null,
                hours: deliveryDate.getHours(),
                minutes: deliveryDate.getMinutes(),
                address: {
                  from: pickUp,
                  to: deliveryAddress,
                },
              }}
            />
            <Input
              containerStyle={s.inputContainer}
              label="Dodatkowe uwagi"
              inputStyle={s.input}
              multiline
              value={comments}
              placeholder="pietro II, przesyłkę proszę zostawić pod drzwiami"
              onChangeText={comments.length <= 150 ? handleChange("comments") : null}
            />
            <View style={{ ...s.textContainer, marginBottom: 10 }}>
              <View style={s.textLine} />
              <Text style={s.text}>
                Sprawdź szczegóły zamówienia i{" "}
                <Text style={s.textBold}>Naciśnij zapłać</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={s.buttonContainer}>
        <Button
          onPress={onSubmit}
          style={s.button}
          disabled={Object.keys(errors).length}
          textStyle={s.buttonText}
          title="Zapłać"
        />
      </View>
    </View>
    // </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  cards: state.cards.all,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Step5);
