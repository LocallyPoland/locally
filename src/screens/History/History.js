import React, { useEffect } from "react";
import s from "./History.s";
import { connect } from "react-redux";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import HistoryItem from "../../misc/HistoryItem/HistoryItem";
import { ScrollView, Text } from "react-native";
import { getHistoryAction } from "../../store/actions/historyActions";

const History = ({ navigation, getHistory, history }) => {
  useEffect(() => {
    getHistory();
  }, []);
  return (
    <MainWrapper
      onBackPress={navigation.goBack}
      style={s.container}
      title="Historia zamówień"
    >
      <ScrollView style={s.scroll}>
        {!!history?.length ? (
          history?.map((item, i) => {
            return (
              <HistoryItem
                key={item._id}
                item={{
                  number: i + 1,
                  status: item.status,
                  maxWeight: item.weight,
                  maxHeight: item.length,
                  address: {
                    from: item.pickUp,
                    to: item.deliveryAddress,
                  },
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

        {/*<HistoryItem*/}
        {/*  item={{*/}
        {/*    number: 42,*/}
        {/*    status: "came",*/}
        {/*    maxWeight: 40,*/}
        {/*    maxHeight: 5,*/}
        {/*    address: {*/}
        {/*      from: "ul. Rynek 3",*/}
        {/*      to: "ul. Lewakowskiego 12/55",*/}
        {/*    },*/}
        {/*  }}*/}
        {/*/>*/}
        {/*<HistoryItem*/}
        {/*  item={{*/}
        {/*    number: 42,*/}
        {/*    status: "coming",*/}
        {/*    maxWeight: 40,*/}
        {/*    maxHeight: 5,*/}
        {/*    address: {*/}
        {/*      from: "ul. Rynek 3",*/}
        {/*      to: "ul. Lewakowskiego 12/55",*/}
        {/*    },*/}
        {/*  }}*/}
        {/*/>*/}
        {/*<HistoryItem*/}
        {/*  item={{*/}
        {/*    number: 42,*/}
        {/*    status: "came",*/}
        {/*    maxWeight: 40,*/}
        {/*    maxHeight: 5,*/}
        {/*    address: {*/}
        {/*      from: "ul. Rynek 3",*/}
        {/*      to: "ul. Lewakowskiego 12/55",*/}
        {/*    },*/}
        {/*  }}*/}
        {/*/>*/}
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
