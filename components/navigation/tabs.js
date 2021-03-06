import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Svg, { Path } from "react-native-svg";
import { isIphoneX } from "react-native-iphone-x-helper";

import {
  HomeScreen,
  ShopScreen,
  CoursesScreen,
  ProfileScreen,
} from "../../screens";

import { icons, COLORS } from "../../constants";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ flexDirection: "row", position: "absolute", top: 0 }}>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>

        <TouchableOpacity
          style={{
            top: -22.5,
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.white,
          }}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 60,
          backgroundColor: COLORS.white,
        }}
        activeOpacity={1}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

const CustomTabBar = (props) => {
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            backgroundColor: COLORS.white,
          }}
        ></View>
        <BottomTabBar {...props.props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
};
// const tabOptions = {
//   showLabel: false,
//         style: {
//           height: "50%",
//           backgroundColor: COLORS.secondary
//         }
// }

const Tabs = () => {
  return (
    <Tab.Navigator
      // tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: [
          {
            display: "flex",
            height: "7%",
            backgroundColor: COLORS.lightGray,
            position: "absolute",
            left: 0,
            bottom: 0,
            right: 0,
            borderTopWidth: 0,
            elevation: 0,
          },
          null,
        ],
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.secondary : COLORS.primary;
          switch (route.name) {
            case "HomeScreen":
              return (
                <Image
                  source={icons.home2_icon}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: tintColor,
                  }}
                />
              );

            case "ShopScreen":
              return (
                <Image
                  source={icons.shop2_icon}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: tintColor,
                  }}
                  tabBar={(props) => <CustomTabBar props={props} />}
                />
              );

            case "CoursesScreen":
              return (
                <Image
                  source={icons.page_icon}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: tintColor,
                  }}
                />
              );

            case "ProfileScreen":
              return (
                <Image
                  source={icons.profile_icon}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: tintColor,
                  }}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="CoursesScreen"
        component={CoursesScreen}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
