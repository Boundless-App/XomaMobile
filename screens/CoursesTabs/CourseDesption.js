import React from "react";
import { View, Text } from "react-native";
import { LineDivider } from "../../components";

import {
  FONTS,
  COLORS,
  icons,
  courses,
  SIZES,
  dummyData,
  dummyData2,
} from "../../constants";

const courseDesption = () => {
  function renderTitle() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>{dummyData2.courses_details.title}</Text>
      </View>
    );
  }

  function renderDescription() {
    return (
      <View>
        <Text
          style={{
            ...FONTS.body3,
            paddingHorizontal: SIZES.padding,
          }}
        >
          {dummyData2.courses_details.description}
        </Text>
      </View>
    );
  }
  return (
    <View>
      {/* Title */}
      {renderTitle()}
      {/* Line */}
      <LineDivider
        lineStyle={{
          height: 1,
          marginVertical: SIZES.radius,
          backgroundColor: COLORS.lightGray5,
        }}
      />

      {/* Description */}
      {renderDescription()}
    </View>
  );
};

export default courseDesption;
