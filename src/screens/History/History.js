import React from "react";
import s from "./History.s";
import { connect } from "react-redux";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import HistoryItem from "../../misc/HistoryItem/HistoryItem";
import { ScrollView } from "react-native";

const History = ({ navigation }) => {
  return (
    <MainWrapper
      onBackPress={navigation.goBack}
      style={s.container}
      title="Historia zamówień"
    >
      <ScrollView style={s.scroll}>
        <HistoryItem
          item={{
            number: 42,
            status: "coming",
            maxWeight: 40,
            maxHeight: 5,
            address: {
              from: "ul. Rynek 3",
              to: "ul. Lewakowskiego 12/55",
            },
            price: 25.25,
          }}
        />
        <HistoryItem
          item={{
            number: 42,
            status: "came",
            maxWeight: 40,
            maxHeight: 5,
            address: {
              from: "ul. Rynek 3",
              to: "ul. Lewakowskiego 12/55",
            },
          }}
        />
        <HistoryItem
          item={{
            number: 42,
            status: "coming",
            maxWeight: 40,
            maxHeight: 5,
            address: {
              from: "ul. Rynek 3",
              to: "ul. Lewakowskiego 12/55",
            },
          }}
        />
        <HistoryItem
          item={{
            number: 42,
            status: "came",
            maxWeight: 40,
            maxHeight: 5,
            address: {
              from: "ul. Rynek 3",
              to: "ul. Lewakowskiego 12/55",
            },
          }}
        />
      </ScrollView>
    </MainWrapper>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(History);
