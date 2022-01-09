import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { ProgressBar } from "../components";

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
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            // backgroundColor: COLORS.lightGreen,
            // top: 10,
            marginTop: SIZES.base * 6,
            // width: 30,
            // height: 30,
            alignItems: "center",
            // justifyContent: "center",
            // borderRadius: 5,
          }}
        >
          <Image
            source={icons.list_icon}
            resizeMode="contain"
            style={{
              width: 30,
              height: 20,
              tintColor: COLORS.textGray,
            }}
          />
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.textGray,
            }}
          >
            {course.topics}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            alignItems: "center",
            marginTop: SIZES.base * 6,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              ...FONTS.h5,
              color: COLORS.lightRed,
              marginLeft: SIZES.padding,
              marginTop: SIZES.base,
            }}
          >
            {course.progress}
          </Text>
          <ProgressBar
            progress={course.progress}
            containerStyle={{
              marginTop: SIZES.base * 2,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalCourseCard;
