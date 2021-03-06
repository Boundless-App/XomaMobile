import React from "react";
import { View, Text, Platform } from "react-native";

import LinearGradient from "react-native-linear-gradient";

import { TextButton, LineDivider } from "../components";
import { FONTS, SIZES, COLORS } from "../constants";

const FooterTotal = ({
  subTotal,
  shippingFee,
  total,
  onPress,
  buttonStyle,
}) => {
  return (
    <View>
      {/* Order Details */}
      <View
        style={{
          padding: SIZES.padding,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.white,
        }}
      >
        {/* SubTotal */}
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: SIZES.base,
          }}
        >
          <Text style={{ flex: 1, ...FONTS.body3 }}>Subtotal</Text>
          <Text style={{ ...FONTS.h3 }}>UGX{subTotal}</Text>
        </View>

        {/* Line */}
        {/* <LineDivider /> */}
        {/* Shipping Fee */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            marginBottom: SIZES.padding * 2,
            marginHorizontal: SIZES.base,
          }}
        >
          <Text style={{ flex: 1, ...FONTS.body3 }}>Shipping Fee</Text>
          <Text style={{ ...FONTS.h3 }}>UGX{shippingFee}</Text>
        </View>

        {/* Line */}
        <LineDivider />

        {/* Total */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding * 2,
            marginBottom: SIZES.padding * 3,
            marginHorizontal: SIZES.base,
          }}
        >
          <Text style={{ flex: 1, ...FONTS.h3 }}>Total</Text>
          <Text style={{ ...FONTS.h3 }}>UGX{total}</Text>
        </View>

        {/* Button */}
        <TextButton
          contentContainerStyle={{
            height: 60,
            //marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.secondary,

            ...buttonStyle,
          }}
          label={"Go To Checkout"}
          labelStyle={{
            color: COLORS.white,
          }}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default FooterTotal;
