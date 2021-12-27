import React from "react";
import { View, Text } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../constants";
import { TextButton } from "../components";

const CourseDescriptionScreen = ({ navigation }) => {
  function renderEnrollButton() {
    return (
      <TextButton
        label="Enroll"
        contentContainerStyle={{
          height: "100%",
          paddingHorizontal: SIZES.padding,
          borderRadius: 20,
          backgroundColor: COLORS.lightGreen,
        }}
        labelStyle={{
          color: COLORS.black,
        }}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      <View
        style={{
          flex: 2,
        }}
      ></View>

      <View
        style={{
          flex: 4,
          backgroundColor: COLORS.lightRed,
          borderTopRightRadius: SIZES.radius * 2,
          borderTopLeftRadius: SIZES.radius * 2,
        }}
      ></View>

      <View
        style={{
          height: "7%",
          backgroundColor: COLORS.lightGray,
        }}
      >
        {renderEnrollButton()}
      </View>
    </View>
  );
};

export default CourseDescriptionScreen;
