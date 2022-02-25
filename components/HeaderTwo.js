import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

const HeaderTwo = ({
  heading,
  icon,
  containerStyle,
  iconStyle,
  onPress,
  icon1,
  textStyle,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        height: "7%",
        backgroundColor: COLORS.secondary,
        alignItems: "center",
        borderBottomRightRadius: 60,
        ...containerStyle,
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: SIZES.iconSize + 10,
            height: SIZES.iconSize + 10,
            tintColor: COLORS.white,
            ...iconStyle,
          }}
        />
      </TouchableOpacity>

      <View>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.white,
            marginLeft: "40%",
            marginHorizontal: SIZES.radius * 4,
            alignItems: "center",
            justifyContent: "center",
            ...textStyle,
          }}
        >
          {heading}
        </Text>
      </View>

      <View>
        <Image
          source={icon1}
          resizeMode="contain"
          style={{
            width: SIZES.iconSize + 10,
            height: SIZES.iconSize + 10,
            tintColor: COLORS.white,
            ...iconStyle,
          }}
        />
      </View>
    </View>
  );
};

export default HeaderTwo;
