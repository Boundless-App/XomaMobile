import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  ShopScreen,
  CoursesScreen,
  ProfileScreen,
} from "../../screens";
import { icons, COLORS } from "../../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: "transparent" },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.home_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.gray : COLORS.lightGray4,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.shop_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.gray : COLORS.lightGray4,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CoursesScreen"
        component={CoursesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.page_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.gray : COLORS.lightGray4,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.profile_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.gray : COLORS.lightGray4,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
