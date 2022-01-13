import React from "react";
import { View, Text } from "react-native";
import { dummyData2 } from "../../constants";

const CourseContent = () => {
  return (
    <View>
      <Text>
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. */}
        {dummyData2?.courses_details?.content}
      </Text>
    </View>
  );
};

export default CourseContent;
