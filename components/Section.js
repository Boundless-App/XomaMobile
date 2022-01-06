import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const Section = ({ containerStyle, title, onPress, children }) => {
  return (
    <View
      style={{
        ...containerStyle,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text
          style={{
            flex: 1,
            ...FONTS.h2,
            color: COLORS.primary,
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
            }}
          >
            See All
          </Text>
        </TouchableOpacity>

        {/*         
// <TextButton
//           contentContainerStyle={{
//             width: 80,
//             borderRadius: 30,
//             backgroundColor: COLORS.primary,
//           }}
//           label="See All"
//           onPress={onPress}
//         /> */}
      </View>
    </View>
  );
};

export default Section;
