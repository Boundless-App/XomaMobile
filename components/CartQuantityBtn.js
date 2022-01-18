import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../constants";

const CartQuantityBtn = ({ containerStyle, iconStyle, quantity, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        paddingRight: 20,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icons.cart_icon}
        style={{
          width: 30,
          height: 30,
          tintColor: COLORS.primary,
          ...iconStyle,
        }}
      />

      <View
        style={{
          position: "absolute",
          top: 1,
          right: 4,
          height: 20,
          width: 20,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.secondary,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.body5,
            fontSize: 10,
            top: -2,
          }}
        >
          {quantity}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartQuantityBtn;
