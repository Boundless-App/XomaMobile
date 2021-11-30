import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

import {
  CoursesScreen,
  ResourcesScreen,
  OpportunitiesScreen,
} from "../../screens";

const CoursesStack = createStackNavigator();

const CourseNav = () => {
  return (
    <CoursesStack.Navigator initialRouteName="CoursesScreen">
      <CoursesStack.Screen name="CoursesScreen" component={CoursesScreen} />
      <CoursesStack.Screen name="ResourcesScreen" component={ResourcesScreen} />
      <CoursesStack.Screen
        name="OpportunitiesScreen"
        component={OpportunitiesScreen}
      />
    </CoursesStack.Navigator>
  );
};

export default CourseNav;
