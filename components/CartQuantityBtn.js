import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { COLORS, FONTS, SIZES, icons } from "../constants";
import cartItems from "../screens/Cart/Reducers/cartItem";

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
          tintColor: COLORS.lightGray,
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
          backgroundColor: COLORS.lightGray,
        }}
      >
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.h4,
            fontSize: 10,
            top: -2,
          }}
        >
          {cartItems.length}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state,
  };
};

export default connect()(CartQuantityBtn);
