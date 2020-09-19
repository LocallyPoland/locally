import React from "react";
import s from "./Cards.s";
import { connect } from "react-redux";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import { View, Text } from "react-native";
import Button from "../../misc/Button/Button";
import BottomViewWrapper from "../../wrappers/BottomViewWrapper/BottomViewWrapper";
import { TouchableHighlight } from "react-native-gesture-handler";
import CreditCard from "../../misc/CreditCard/CreditCard";
import AddItemView from "../../misc/AddItemView/AddItemView";

const Cards = ({ user, navigation, cards }) => {
  const redirectToAddCard = () => navigation.navigate("AddCard");
  return (
    <MainWrapper title="Portfel" onBackPress={navigation.goBack}>
      <View style={s.container}>
        <View style={s.balanceContainer}>
          <Text style={s.balanceShadow}>{user.balance} zł</Text>
          <Text style={s.balance}>{user.balance} zł</Text>
        </View>
      </View>
      <Button title="Naładuj" style={s.button} />
      <BottomViewWrapper style={s.bottomContainer}>
        {cards.map((card) => (
          <CreditCard {...{ card }} {...{ navigation }} key={card.id} />
        ))}

        <View>
          <AddItemView text="Dodaj kartę" onPress={redirectToAddCard} />
        </View>
      </BottomViewWrapper>
    </MainWrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.profile,
  cards: state.cards.all,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
