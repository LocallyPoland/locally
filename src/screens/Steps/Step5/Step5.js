import React from "react";
import s from "./Step5.s";
import StepWrapper from "../../../wrappers/StepWrapper/StepWrapper";
import { withFormik } from "formik";
import { connect } from "react-redux";
import { FlatList, ScrollView, Text, View } from "react-native";
import HistoryItem from "../../../misc/HistoryItem/HistoryItem";
import CreditCard from "../../../misc/CreditCard/CreditCard";
import classnames from "classnames-react-native";
import Button from "../../../misc/Button/Button";
import AddItemView from "../../../misc/AddItemView/AddItemView";

const Step5 = ({ onSubmit, cards, navigation, values, errors }) => {
  const redirectToAddCard = () =>
    navigation.navigate("AddCard", {
      goBack: true,
    });

  const { status, sum, weight, length, deliveryAddress, pickUp } = values;

  return (
    <ScrollView>
      <View style={s.container}>
        <View style={s.inner}>
          <HistoryItem
            onlyBaseInfo
            containerStyle={s.infoContainer}
            item={{
              status,
              price: sum,
              maxWeight: weight,
              maxHeight: length,
              address: {
                from: pickUp,
                to: deliveryAddress,
              },
            }}
          />
          <View style={{ ...s.textContainer, marginBottom: 10 }}>
            <View style={s.textLine} />
            <Text style={s.text}>
              <Text style={s.textBold}>Naciśnij finisz </Text>i wybierz formę
              płatności
            </Text>
          </View>
          <View style={s.cardsContainer}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={s.scrollInner}
            >
              {cards.map((card, i) => (
                <CreditCard
                  onlyCardContent
                  {...{ card }}
                  key={card.id}
                  containerStyle={classnames(s.card, [
                    { marginLeft: 0 },
                    i === 0,
                  ])}
                />
              ))}
              <AddItemView
                style={s.addCard}
                text="Dodaj karte"
                withoutPlus
                onPress={redirectToAddCard}
              />
            </ScrollView>
          </View>
        </View>
        <Button
          onPress={onSubmit}
          style={s.button}
          disabled={Object.keys(errors).length}
          textStyle={s.buttonText}
          title="Finisz"
        />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  cards: state.cards.all,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Step5);
