import React from "react";
import { View, Text, Animated } from "react-native";
import { COLORS, SIZES } from "../constants";

const TabIndicator = ({ measureLayout, scrollX }) => {
  const inputRange = course_details_tabs.map((_, i) => i * SIZES.width);

  const tabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((measure) => measure.width),
  });

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((measure) => measure.x),
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        height: 4,
        width: tabIndicatorWidth,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.secondary,
        bottom: 0,
        transform: [
          {
            translateX,
          },
        ],
      }}
    />
  );
};

export default TabIndicator;
