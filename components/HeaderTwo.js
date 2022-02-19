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
      <View
        style={{
          alignItems: "center",
          paddingHorizontal: SIZES.radius,
        }}
      >
        <TouchableOpacity onPress={onPress}>
          <Image
            source={icon}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.white,
              ...iconStyle,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.white,
            textAlign: "center",
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
