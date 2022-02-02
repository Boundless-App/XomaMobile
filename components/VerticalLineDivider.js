import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../constants";

const VerticalLineDivider = () => {
  return (
    <View
      style={{
        width: 1,
        paddingVertical: 4,
      }}
    >
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray,
          borderLeftWidth: 1,
        }}
      ></View>
    </View>
  );
};

export default VerticalLineDivider;
