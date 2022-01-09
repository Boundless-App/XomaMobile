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

//import SearchCos from '../pages/SeachBar/SearchCos';
import { COLORS, FONTS, SIZES, icons, courses } from "../constants";
import { LineDivider, TextButton } from "../components";
import { HorizontalCourseCard } from "../components";

const CoursesScreen = ({ navigation }) => {
  function renderHeaderButtons() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 40,
          marginBottom: 10,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <View
          style={{
            marginRight: "5%",
          }}
        >
          <TextButton
            label="Resourses"
            contentContainerStyle={{
              height: "100%",
              paddingHorizontal: SIZES.padding,
              borderRadius: 20,
              backgroundColor: COLORS.transparentWhite,
            }}
            labelStyle={{
              color: COLORS.black,
            }}
            onPress={() => navigation.navigate("Resources")}
          />
        </View>

        <View style={{ marginLeft: "5%" }}>
          <TextButton
            label="Opportunities"
            contentContainerStyle={{
              height: "100%",
              paddingHorizontal: SIZES.padding * 0.6,
              borderRadius: 20,
              backgroundColor: COLORS.transparentWhite,
            }}
            labelStyle={{
              color: COLORS.black,
            }}
            onPress={() => navigation.navigate("Opportunities")}
          />
        </View>
      </View>
    );
  }

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
              // marginVertical: SIZES.base,

              marginTop: index == 0 ? SIZES.padding2 : SIZES.padding,
            }}
            // onPress={
            //   (() => navigation.navigate("CourseDescriptionScreen"),
            //   { courses: item })
            // }
            onPress={() =>
              navigation.navigate("CourseDescriptionScreen", {
                courses: item,
              })
            }
          />
        )}
        ItemSeparatorComponent={() => (
          <LineDivider
            lineStyle={{
              backgroundColor: COLORS.lightTextGray,
            }}
          />
        )}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray3,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        {renderHeaderButtons()}
      </View>

      <View
        style={{
          flex: 6,
          backgroundColor: COLORS.lightGray2,
          borderTopRightRadius: SIZES.radius * 2,
          borderTopLeftRadius: SIZES.radius * 2,
          overflow: "hidden",
          marginBottom: SIZES.radius * 2,
        }}
      >
        {renderCoursesList()}
      </View>
      {/* <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGray2,
          overflow: "hidden",
        }}
      ></View> */}
    </View>
  );
};
export default CoursesScreen;
