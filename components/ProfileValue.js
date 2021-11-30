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
          backgroundColor: COLORS.lightGray4,
        }}
      >
        <Image
          source={icons}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
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
              color: COLORS.lightGray3,
              ...FONTS.body3,
            }}
          >
            {label}
          </Text>
        )}
        <Text
          style={{
            ...FONTS.h3,
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
