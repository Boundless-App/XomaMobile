import React from "react";
import { TouchableOpacity, Image } from "react-native";

import { COLORS, SIZES } from "../constants";

const IconButton = ({ containerStyle, icon, iconStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        ...containerStyle,
      }}
      onPress={onPress}
    >
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
  );
};

export default IconButton;
