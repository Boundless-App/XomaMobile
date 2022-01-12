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
      // elevation={5}
      style={{
        flexDirection: "row",
        borderRadius: SIZES.base,
        backgroundColor: COLORS.lightGray,
        elevation: 15,

        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* Thumbnail */}
      <View
        style={
          {
            //backgroundColor: COLORS.black
          }
        }
      >
        <Image
          source={course.course_image}
          resizeMode="cover"
          style={{
            width: 130,
            height: 110,
            borderRadius: 20,
          }}
        />
      </View>
      {/* Details */}
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginLeft: SIZES.base,
          //backgroundColor: COLORS.black,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            height: 52,
            //backgroundColor: COLORS.white
          }}
        >
          {/* Title */}
          <Text
            style={{
              ...FONTS.h4,
              fontSize: 17,
              marginTop: SIZES.base,
              color: COLORS.primary,
            }}
          >
            {course.course_title}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            marginTop: SIZES.base * 6.5,
            alignItems: "center",
            //backgroundColor: COLORS.lightGreen,
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
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.base * 4,
            //backgroundColor: COLORS.lightBlue
          }}
        >
          <ProgressBar
            progress={course.progress}
            containerStyle={
              {
                //marginTop: SIZES.base,
              }
            }
          />

          <Text
            style={{
              ...FONTS.h5,
              color: COLORS.secondary,
              marginLeft: SIZES.base / 2,
              //marginTop: SIZES.base,
            }}
          >
            {course.progress}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalCourseCard;
