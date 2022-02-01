import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const Section = ({ containerStyle, title, onPress, children, textStyle }) => {
  return (
    <View
      style={{
        ...containerStyle,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: "4%",
          paddingRight: "4%" 
        }}
      >
        <Text
          style={{
            flex: 1,
            ...FONTS.h2,
            color: COLORS.primary,

            ...textStyle
          }}
        >
          {title}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              ...FONTS.h3,
              alignSelf: "flex-start",
              textDecorationLine: "underline",
              color: COLORS.primary,
              ...textStyle
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Section;
