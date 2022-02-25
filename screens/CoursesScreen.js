import React from "react";
import {
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";

import { COLORS, FONTS, SIZES, icons, courses } from "../constants";
import {
  HeaderTwo,
  LineDivider,
  TextButton,
  VerticalLineDivider,
} from "../components";
import { HorizontalCourseCard } from "../components";

const CoursesScreen = ({ navigation }) => {
  function renderCoursesList() {
    return (
      <FlatList
        data={courses.courses}
        listKey="Courses"
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `Courses-${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
        }}
        renderItem={({ item, index }) => (
          <HorizontalCourseCard
            course={item}
            containerStyle={{
              paddingTop: SIZES.padding,
              paddingBottom: SIZES.padding2 * 2,
              marginTop: index == 0 ? SIZES.padding2 : SIZES.padding,
            }}
            onPress={() =>
              navigation.navigate("CourseDescriptionScreen", {
                courses: item,
              })
            }
          />
        )}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <HeaderTwo heading={"Courses"} textStyle={{ marginRight: "35%" }} />
      <View
        style={{
          flex: 9,
          backgroundColor: COLORS.lightGray,

          overflow: "hidden",
          marginBottom: SIZES.radius * 2,
        }}
      >
        {renderCoursesList()}
      </View>
    </View>
  );
};
export default CoursesScreen;
