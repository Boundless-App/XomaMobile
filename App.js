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
  CourseDescriptionScreen,
  LessonScreen,
  OnBoarding,
  SignUp,
} from "./screens/";
import { Tabs, CourseNav, ShopNav } from "./components";
import { useFonts } from "expo-font";
import SignIn from "./screens/Authentication/SignIn";
import store from "./screens/Cart/store";

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
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="OnBoarding" component={OnBoarding} />

          <Stack.Screen name="SignIn" component={SignIn} />

          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Shop" component={ShopNav} />
          <Stack.Screen name="Courses" component={CourseNav} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Resources" component={ResourcesScreen} />
          <Stack.Screen name="Opportunities" component={OpportunitiesScreen} />
          <Stack.Screen
            name="CourseDescriptionScreen"
            component={CourseDescriptionScreen}
          />
          <Stack.Screen name="LessonScreen" component={LessonScreen} />
          <Stack.Screen
            name="BookDescriptionScreen"
            component={BookDescriptionScreen}
          />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
