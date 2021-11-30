import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import {
  CoursesScreen,
  ShopScreen,
  ProfileScreen,
  OpportunitiesScreen,
  ResourcesScreen,
  BookDescriptionScreen,
  CartScreen,
} from "./screens/";
import { Tabs, CourseNav, ShopNav } from "./components";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"HomeScreen"}
      >
        <Stack.Screen name="HomeScreen" component={Tabs} />
        <Stack.Screen name="ShopScreen" component={ShopNav} />
        <Stack.Screen name="CoursesScreen" component={CourseNav} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="ResourcesScreen" component={ResourcesScreen} />
        <Stack.Screen
          name="OpportunitiesScreen"
          component={OpportunitiesScreen}
        />
        <Stack.Screen
          name="BookDescriptionScreen"
          component={BookDescriptionScreen}
        />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
