import React, { useCallback, useEffect, useMemo, useState } from "react";
import s from "./Home.s";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import SwitchHome from "../../misc/SwitchHome/SwitchHome";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CardHome from "../../misc/CardHome/CardHome";
import { checkAppDisabled, mwp } from "../../utils/utils";
import AdaptiveWrapper from "../../wrappers/AdaptiveWrapper/AdaptiveWrapper";
import CustomImage from "../../misc/CustomImage/CustomImage";
import { getHistoryAction } from "../../store/actions/historyActions";
import { TouchableWithoutFeedback } from "react-native-web";
import { useFocusEffect } from "@react-navigation/core";
import { set } from "react-native-reanimated";
import { showModalErrorAction } from "../../store/actions/baseActions";

const Home = ({
  user,
  history,
  settings,
  navigation,
  getHistory,
  showErrorModal,
}) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const redirectToHistory = () => navigation.navigate("History");

  const activeOrdersNumber = useMemo(() => {
    return history?.filter(({ status }) => status === "created")?.length || 0;
  }, [history]);

  useEffect(() => {
    if (settings.timeStart && checkAppDisabled()) {
      showErrorModal();
    }
  }, [settings]);

  useFocusEffect(
    useCallback(() => {
      getHistory();
    }, [])
  );

  return (
    <MainWrapper style={s.container} onBackPress={navigation.goBack}>
      <View style={s.mainContent}>
        <View style={s.mainContentInner}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate("Profile")}
          >
            <View style={s.userInfoContainer}>
              <Text style={s.userName}>{`${user.fName} ${user.lName}`}</Text>
              <Text style={s.userEmail}>{user.email}</Text>
            </View>
          </TouchableOpacity>
          {selectedTab === 1 ? (
            <TouchableWithoutFeedback onPress={redirectToHistory}>
              <View style={s.balanceContainer}>
                {!!activeOrdersNumber && (
                  <Text style={s.balance}>{activeOrdersNumber}</Text>
                )}
                {!activeOrdersNumber ? (
                  <Text style={s.emptyOdrerMessage}>
                    W tym momencie nie masz{"\n"}aktywnych dostaw
                  </Text>
                ) : (
                  <Text style={s.emptyOdrerMessage}>Aktywnych dostaw</Text>
                )}
              </View>
            </TouchableWithoutFeedback>
          ) : (
            <View style={s.imageContainer}>
              <AdaptiveWrapper minWidthToShow={350}>
                <CustomImage
                  width={mwp(50, 300, 100)}
                  height={hp(100) <= 690 ? 150 : wp(50)}
                  source={require("../../../assets/icons/Group-62.png")}
                />
              </AdaptiveWrapper>
            </View>
          )}
        </View>
        {selectedTab === 1 ? (
          <View style={s.actionsContainer}>
            <Text style={s.selectActionMessage}>Wybierz usługę</Text>
            <View style={s.cardsContainer}>
              <CardHome
                icon={require("../../../assets/icons/Group-2.png")}
                text="Dostawa jak najszybciej"
                redirect={() => {
                  if (checkAppDisabled()) {
                    showErrorModal();
                    return;
                  }
                  navigation.navigate("CreateOrder", {
                    isImmediateOrder: true,
                  });
                }}
              />
              <CardHome
                icon={require("../../../assets/icons/Group-3.png")}
                text="Dostawa na określoną godzinę"
                redirect={() => {
                  if (checkAppDisabled()) {
                    showErrorModal();
                    return;
                  }
                  navigation.navigate("CreateOrder");
                }}
              />
            </View>
          </View>
        ) : (
          <View style={s.actionsContainer}>
            <Text style={s.selectActionMessage}>Wybierz usługę</Text>
            <View style={s.cardsContainer}>
              <CardHome
                icon={require("../../../assets/icons/Group-5.png")}
                text={`Moje dane`}
                fullscreen
                redirect={() => navigation.navigate("Profile")}
              />

              <CardHome
                icon={require("../../../assets/icons/Group-6.png")}
                text={`Historia\nzamowień`}
                redirect={() => navigation.navigate("History")}
              />

              <CardHome
                icon={require("../../../assets/icons/Group-4.png")}
                text={`Moje\nadresy`}
                redirect={() => navigation.navigate("Places")}
              />

              {/*<CardHome*/}
              {/*  icon={require("../../../assets/icons/Group-7.png")}*/}
              {/*  text={`Portfel\n`}*/}
              {/*  redirect={() => navigation.navigate("Cards")}*/}
              {/*/>*/}
            </View>
          </View>
        )}
      </View>
      <SwitchHome {...{ selectedTab }} {...{ setSelectedTab }} />
      {/* <View style={s.bottomView}>
        <Text />
      </View> */}
    </MainWrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.profile,
  history: state.history.all,
  settings: state.base.settings,
});
const mapDispatchToProps = (dispatch) => ({
  getHistory: () => dispatch(getHistoryAction()),
  showErrorModal: () => dispatch(showModalErrorAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
