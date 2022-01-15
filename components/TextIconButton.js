import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

import { COLORS, FONTS } from "../constants";

const TextIconButton = ({
  containerStyle,
  label,
  labelSyle,
  icon,
  iconPosition,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {iconPosition == "LEFT" && (
        <Image
          source={icon}
          style={{
            ...styles.image,
            ...iconStyle,
          }}
        />
      )}

      <Text
        style={{
          ...FONTS.body3,
          ...labelSyle,
        }}
      >
        {label}
      </Text>

      {iconPosition == "RIGHT" && (
        <Image
          source={icon}
          style={{
            ...styles.image,
            ...iconStyle,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 5,
    width: 20,
    height: 20,
    tintColor: COLORS.black,
  },
});

export default TextIconButton;
