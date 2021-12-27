import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import { COLORS, FONTS, SIZES } from "../constants";

const BookCard = ({ book, containerStyle }) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={book?.image}
        resizeMode="cover"
        style={{
          height: 150,
          width: 200,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          justifyContent: "flex-end",
          ...containerStyle,
        }}
      >
        <Text
          style={{
            color: COLORS.textGray,
            ...FONTS.h3,
          }}
        >
          {book?.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default BookCard;
