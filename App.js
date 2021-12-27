import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import {
  ProfileScreen,
  OpportunitiesScreen,
  ResourcesScreen,
  BookDescriptionScreen,
  CartScreen,
  CourseDescriptionScreen,
} from "./screens/";
import { Tabs, CourseNav, ShopNav } from "./components";
import { useFonts } from "expo-font";

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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Home"}
      >
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
        <Stack.Screen
          name="BookDescriptionScreen"
          component={BookDescriptionScreen}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
