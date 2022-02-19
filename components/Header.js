import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import { CartQuantityBtn } from ".";

const Header = ({
  heading,
  containerStyle,
  icon,
  iconStyle,
  onPress,
  onPress1,
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
      <TouchableOpacity onPress={onPress1} style={{}}>
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
            alignItems: "center"
          }}
        >
          {heading}
        </Text>
      </View>

      <View>
        <CartQuantityBtn
          // quantity={0}
          onPress={onPress}
          containerStyle={{
            alignSelf: "center",
            backgroundColor: COLORS.transparent,
            marginHorizontal: "5%",
          }}
        />
      </View>
    </View>
  );
};

export default Header;
