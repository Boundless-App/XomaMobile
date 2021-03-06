import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  CoursesScreen,
  ResourcesScreen,
  OpportunitiesScreen,
  CourseDescriptionScreen,
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
      <CoursesStack.Screen
        name="CourseDescriptionScreen"
        component={CourseDescriptionScreen}
      />
    </CoursesStack.Navigator>
  );
};

export default CourseNav;
