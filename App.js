import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Provider } from "react-redux";

import {
  ProfileScreen,
  OpportunitiesScreen,
  ResourcesScreen,
  BookDescriptionScreen,
  CartScreen,
  Checkout,
  Success,
  ChangePassword,
  CourseDescriptionScreen,
  CourseAttempt,
  OnBoarding,
  SignUp,
  Continue,
  BookAMentor,
  ResOps,
  Notifications,
} from "./screens/";
import { Tabs, CourseNav, ShopNav } from "./components";
import { useFonts } from "expo-font";
import SignIn from "./screens/Authentication/SignIn";
// import store from "/screens/Cart";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};
const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"OnBoarding"}
      >
        {/* Authentication */}
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Continue" component={Continue} />

        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Shop" component={ShopNav} />
        <Stack.Screen name="Courses" component={CourseNav} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        <Stack.Screen name="Opportunities" component={OpportunitiesScreen} />
        <Stack.Screen name="ResOps" component={ResOps} />
        <Stack.Screen
          name="CourseDescriptionScreen"
          component={CourseDescriptionScreen}
        />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen
          name="BookDescriptionScreen"
          component={BookDescriptionScreen}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="BookAMentor" component={BookAMentor} />
        <Stack.Screen name="CourseAttempt" component={CourseAttempt} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
