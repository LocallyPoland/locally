import React, { useState } from "react";
import s from "./Home.s";
import { connect } from "react-redux";
import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import MainWrapper from "../../wrappers/MainWrapper/MainWrapper";
import InnerShadowWrapper from "../../wrappers/InnerShadowWrapper/InnerShadowWrapper";
import SvgUri from "react-native-svg-uri";
import SwitchHome from "../../misc/SwitchHome/SwitchHome";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CardHome from "../../misc/CardHome/CardHome";
import { mwp } from "../../utils/utils";
import AdaptiveWrapper from "../../wrappers/AdaptiveWrapper/AdaptiveWrapper";

const Home = ({ user, navigation }) => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <MainWrapper style={s.container} onBackPress={navigation.goBack}>
      <View style={s.mainContent}>
        <View>
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
            <View style={s.balanceContainer}>
              <Text style={s.balance}>{user.balance || 0} zł</Text>
              <Text style={s.emptyOdrerMessage}>
                W tym momencie nie masz{"\n"}aktywnych dostaw
              </Text>
            </View>
          ) : (
            <View style={s.imageContainer}>
              <AdaptiveWrapper minWidthToShow={350}>
                <SvgUri
                  width={mwp(55, 300, 100)}
                  height={mwp(55, 300, 100)}
                  source={require("../../../assets/icons/Group-62.svg")}
                />
              </AdaptiveWrapper>
            </View>
          )}
        </View>
        {selectedTab === 1 ? (
          <View style={s.actionsContainer}>
            <Text style={s.selectActionMessage}>Wybierz{"\n"}usługę</Text>
            <View style={s.cardsContainer}>
              <CardHome
                icon={require("../../../assets/icons/Group-2.svg")}
                text="Dostawa jak najszybciej"
                redirect={() =>
                  navigation.navigate("CreateOrder", { isImmediateOrder: true })
                }
              />
              <CardHome
                icon={require("../../../assets/icons/Group-3.svg")}
                text="Dostawa na określoną godzinę"
                redirect={() => navigation.navigate("CreateOrder")}
              />
            </View>
          </View>
        ) : (
          <View style={s.actionsContainer}>
            <Text style={s.selectActionMessage}>Wybierz{"\n"}usługę</Text>
            <View style={s.cardsContainer}>
              <CardHome
                icon={require("../../../assets/icons/Group-5.svg")}
                text={`Moje\ndane`}
                redirect={() => navigation.navigate("Profile")}
              />

              <CardHome
                icon={require("../../../assets/icons/Group-6.svg")}
                text={`Historia\nzamowień`}
                redirect={() => navigation.navigate("History")}
              />

              <CardHome
                icon={require("../../../assets/icons/Group-4.svg")}
                text={`Moje\nadresy`}
                redirect={() => navigation.navigate("Places")}
              />

              <CardHome
                icon={require("../../../assets/icons/Group-7.svg")}
                text={`Portfel\n`}
                redirect={() => navigation.navigate("Cards")}
              />
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
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
