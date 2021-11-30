import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

import { ShopScreen, CartScreen, BookDescriptionScreen } from "../../screens";

const ShopStack = createStackNavigator();

const ShopNav = () => {
  return (
    <ShopStack.Navigator initialRouteName="ShopScreen">
      <ShopStack.Screen name="ShopScreen" component={ShopScreen} />
      <ShopStack.Screen
        name="BookDescriptionScreen"
        component={BookDescriptionScreen}
      />
      <ShopStack.Screen name="CartScreen" component={CartScreen} />
    </ShopStack.Navigator>
  );
};

export default ShopNav;
