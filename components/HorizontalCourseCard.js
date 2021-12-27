import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { SIZES, COLORS, FONTS, icons } from "../constants";

const HorizontalCourseCard = ({ containerStyle, course, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* Thumbnail */}
      <Image
        source={course.course_image}
        resizeMode="cover"
        style={{
          width: 130,
          height: 130,
          marginBottom: SIZES.radius,
        }}
        imageStyle={{
          borderRadius: SIZES.radius,
        }}
      />
      {/* Details */}
      <View
        style={{
          flex: 1,
          marginLeft: SIZES.base,
        }}
      >
        {/* Title */}
        <Text
          style={{
            ...FONTS.h3,
            fontSize: 18,
          }}
        >
          {course.course_title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalCourseCard;
