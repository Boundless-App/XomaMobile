import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { COLORS, FONTS, SIZES } from "../constants";

const SectionCard = ({
  containerStyle,
  sectionTitle,
  onPress,
  icon,
  iconStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: SIZES.base,
        backgroundColor: COLORS.white,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center",
        width: 180,
        height: 180,

        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* Details */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "80%",
          width: "80%",
          backgroundColor: COLORS.transparent,
        }}
      >
        {/* Section Image */}
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",

            ...iconStyle,
          }}
        />
        {/* Title */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            height: "30%",
            width: "100%",
            backgroundColor: COLORS.white,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row-reverse",
            alignSelf: "flex-start",
          }}
        >
          <Text
            style={{
              ...FONTS.h4,
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {sectionTitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SectionCard;
