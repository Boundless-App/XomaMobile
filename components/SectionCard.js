import React from "react";
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";

import { COLORS, FONTS, SIZES } from "../constants";

const SectionCard = ({
  containerStyle,
  sectionTitle,
  onPress,
  icon,
  iconStyle,
  iconContainer,
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
        height: 170,

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
        <View
      style={{
        width: 100,
        height: 100,
        borderRadius: 80,
        backgroundColor: COLORS.transparent,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: SIZES.radius,

        ...iconContainer
      }}
        >
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            width: "70%",
            height: "70%",

            ...iconStyle,
          }}
        />
        </View>

        {/* Title */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            height: "30%",
            width: "100%",
            backgroundColor: COLORS.transparent,
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "row-reverse",
            alignSelf: "flex-start",
          }}
        >
          <Text
            style={{
              ...FONTS.h4,
              //textAlign: "center",
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
