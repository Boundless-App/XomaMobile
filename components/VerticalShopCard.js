import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { SIZES, COLORS, FONTS, icons } from "../constants";

const VerticalShopCard = ({ containerStyle }) => {
  return (
    <TouchableOpacity
      style={{
        width: 270,
        ...containerStyle,
      }}
    >
      {/* thumbnail */}
      <Image
        //source={}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 150,
          marginBottom: SIZES.radius,
          borderRadius: SIZES.radius,
        }}
      />

      {/* Details */}
      <View
        style={{
          flexShrink: 1,
          paddingHorizontal: SIZES.radius,
        }}
      >
        <Text
          style={{
            flex: 1,
            ...FONTS.h3,
            fontSize: 18,
          }}
        >
          {/*  */}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalShopCard;
