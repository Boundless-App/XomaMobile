import React from "react";
import { View, Text } from "react-native";

import { COLORS } from "../constants";

const ProgressBar = ({ containerStyle, progress }) => {
  return (
    <View
      style={{
        width: "80%",
        height: 13,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        ...containerStyle,
      }}
    >
      <View
        style={{
          position: "absolute",
          left: 0,
          height: "100%",
          width: progress,
          borderRadius: 10,
          backgroundColor: COLORS.primary,
        }}
      ></View>
    </View>
  );
};

export default ProgressBar;
