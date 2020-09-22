import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import FontState from "../context/FontState/FontState";
import FontContext from "../context/FontState/FontContext";
import Register from "../screens/Register/Register";
import Modal from "../misc/Modal/Modal";
import History from "../screens/History/History";
import Profile from "../screens/Profile/Profile";
import EditOrder from "../screens/EditOrder/EditOrder";
import AddCard from "../screens/AddCard/AddCard";
import Cards from "../screens/Cards/Cards";
import Step1 from "../screens/Steps/Step1/Step1";
import Step2 from "../screens/Steps/Step2/Step2";
import Step3 from "../screens/Steps/Step3/Step3";
import Step4 from "../screens/Steps/Step4/Step4";
import Step5 from "../screens/Steps/Step5/Step5";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import Places from "../screens/Places/Places";
import RestorePassword from "../screens/RestorePassword/RestorePassword";
import CreateOrder from "../screens/CreateOrder/CreateOrder";
import EditCard from "../screens/EditCard/EditCard";
import CreatePlace from "../screens/CreatePlace/CreatePlace";

const Stack = createStackNavigator();

const Navigation = ({ profile }) => {
  const fontState = FontState();
  const isLogged = !!profile._id;
  return (
    !!fontState.fontsLoaded && (
      <FontContext.Provider value={fontState}>
        <NavigationContainer
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Navigator initialRouteName={isLogged ? "Place" : "Login"}>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={Home}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Register"
              component={Register}
            />
            <Stack.Screen
              name="History"
              component={History}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Places"
              component={Places}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Cards"
              component={Cards}
            />
            <Stack.Screen
              name="CreateOrder"
              component={CreateOrder}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreatePlace"
              component={CreatePlace}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Profile"
              component={Profile}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="EditOrder"
              component={EditOrder}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="AddCard"
              component={AddCard}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="EditCard"
              component={EditCard}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="RestorePassword"
              component={RestorePassword}
            />
          </Stack.Navigator>
        </NavigationContainer>

        <Modal />
      </FontContext.Provider>
    )
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
