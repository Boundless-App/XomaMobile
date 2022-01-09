import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { COLORS, FONTS } from "../constants";

const SelectTabButton = ({ containerStyle, label, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: selected ? COLORS.lightRed : COLORS.textGray,
          ...FONTS.body2,
          fontSize: 18,
        }}
      >
        {label}
      </Text>

      <View
        style={{
          marginTop: selected ? 3 : 4,
          height: selected ? 4 : 2,
          width: "100%",
          backgroundColor: selected ? COLORS.lightRed : COLORS.textGray,
        }}
      ></View>
    </TouchableOpacity>
  );
};

export default SelectTabButton;
