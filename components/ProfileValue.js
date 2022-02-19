import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../constants";

const ProfileValue = ({ icons, label, value, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 80,
        alignItems: "center",
      }}
      onPress={onPress}
    >
      {/* Icon  */}
      <View
        style={{
          width: 40,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          backgroundColor: COLORS.transparentBlack,
        }}
      >
        <Image
          source={icons}
          resizeMode="contain"
          style={{
            width: SIZES.iconSize + 5,
            height: SIZES.iconSize + 5,
            tintColor: COLORS.white,
          }}
        />
      </View>

      {/* Label & Value  */}
      <View
        style={{
          flex: 1,
          marginLeft: SIZES.radius,
        }}
      >
        {label && (
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
          >
            {label}
          </Text>
        )}
        <Text
          style={{
            ...FONTS.body3,
          }}
        >
          {value}
        </Text>
      </View>

      {/* Icon */}
      <Image />
    </TouchableOpacity>
  );
};

export default ProfileValue;
