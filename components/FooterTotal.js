import React from "react";
import { View, Text, Platform } from "react-native";

import LinearGradient from "react-native-linear-gradient";

import { TextButton, LineDivider } from "../components";
import { FONTS, SIZES, COLORS } from "../constants";

const FooterTotal = ({ subTotal, shippingFee, total, onPress }) => {
  return (
    <View>
      {/* Shadow */}
      {/* <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[COLORS.transparent, COLORS.lightGray2]}
        style={{
          position: "absolute",
          top: -15,
          left: 0,
          right: 0, 
          height: Platform.OS === "ios" ? 200 : 50,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }} 
      />
      */}
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
          }}
        >
          <Text style={{ flex: 1, ...FONTS.body3 }}>Subtotal</Text>
          <Text style={{ ...FONTS.h4 }}>UGX{subTotal}</Text>
        </View>

        {/* Line */}
        <LineDivider />
        {/* Shipping Fee */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            marginBottom: SIZES.padding,
          }}
        >
          <Text style={{ flex: 1, ...FONTS.body3 }}>Shipping Fee</Text>
          <Text style={{ ...FONTS.h4 }}>UGX{shippingFee}</Text>
        </View>

        {/* Line */}
        <LineDivider />
        {/* Total */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            marginBottom: SIZES.padding,
          }}
        >
          <Text style={{ flex: 1, ...FONTS.h3 }}>Total</Text>
          <Text style={{ ...FONTS.h4 }}>UGX{total}</Text>
        </View>

        {/* Button */}
        <TextButton
          contentContainerStyle={{
            height: 60,
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.secondary,
          }}
          label={"Place Order"}
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
