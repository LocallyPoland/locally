import React, { useEffect } from "react";
import s from "./History.s";
import { connect } from "react-redux";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import HistoryItem from "../../misc/HistoryItem/HistoryItem";
import { ScrollView, Text, View } from "react-native";
import { getHistoryAction } from "../../store/actions/historyActions";

const History = ({ navigation, getHistory, history }) => {
  useEffect(() => {
    if (!history.length) {
      getHistory();
    }
  }, []);
  console.log('history', history);
  return (
    <MainWrapper
      onBackPress={navigation.goBack}
      style={s.container}
      title="Historia zamówień"
    >
      <ScrollView style={s.scroll}>
        <View style={s.itemsContainer}>
          {!!history?.length ? (
            history?.map((item, i) => {
              console.log("item ===", item);
              const orderDate =
                item.deliveryTime && new Date(item.deliveryTime);
              console.log("order date ===", orderDate);
              console.log("order hour ===", orderDate?.getUTCHours());
              return (
                <HistoryItem
                  key={item._id}
                  item={{
                    ...item,
                    number: item.numOfOrder,
                    status: item.status,
                    maxWeight: item.weight,
                    maxHeight: item.length,
                    address: {
                      from: item.pickUp,
                      to: item.deliveryAddress,
                    },
                    hours: orderDate?.getUTCHours(),
                    minutes: orderDate?.getMinutes(),
                    price: item.sum,
                  }}
                />
              );
            })
          ) : (
            <Text style={s.emptyText}>
              Jeszcze nie złożyłeś żadnego zamówienia
            </Text>
          )}
        </View>
      </ScrollView>
    </MainWrapper>
  );
};

const mapStateToProps = (state) => ({
  history: state.history.all,
});
const mapDispatchToProps = (dispatch) => ({
  getHistory: () => dispatch(getHistoryAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
