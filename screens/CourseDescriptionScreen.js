import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import { COLORS, FONTS, SIZES, icons, coursesData } from "../constants";
import { IconButton, SelectTabButton, TextButton } from "../components";

const CourseDescriptionScreen = ({ route, navigation }) => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [courses, setCourses] = React.useState(null);

  React.useEffect(() => {
    let { courses } = route.params;
    setCourses(courses);
  }, [courses]);

  function renderCoursesTitle() {
    return (
      <SafeAreaView
        style={{
          position: "absolute",
          bottom: 70,
          top: 0,
          left: 0,
          // right: 0,
          // height: "40%",
          // overflow: "hidden",
          // alignItems: "center",
        }}
      >
        <IconButton
          icon={icons.back_icon}
          onPress={() => navigation.goBack()}
          iconStyle={{
            tintColor: COLORS.white,
          }}
          containerStyle={{
            // marginVertical: "8%",
            // marginHorizontal: "8%",
            position: "absolute",
            top: 40,
            left: 20,
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            backgroundColor: COLORS.transparentBlack,
            borderRadius: SIZES.padding,
          }}
        />
        <Text
          style={{
            // position: "absolute",
            // flex: 1,
            // flexWrap: "wrap",
            top: "80%",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            bottom: 10,
            marginHorizontal: 20,
            color: COLORS.white,
            ...FONTS.h2,
          }}
        >
          {courses.course_title}
        </Text>
      </SafeAreaView>
    );
  }

  function renderCourseOptions() {
    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <SelectTabButton
          containerStyle={{
            width: "30%",
          }}
          label="Description"
          selected={selectedTab == 0}
          onPress={() => setSelectedTab(0)}
        />
        <SelectTabButton
          containerStyle={{
            width: "30%",
          }}
          label="Content"
          selected={selectedTab == 1}
          onPress={() => setSelectedTab(1)}
        />
      </View>
    );
  }

  function renderEnrollButton() {
    return (
      <TextButton
        label="Enroll"
        contentContainerStyle={{
          height: "100%",
          paddingHorizontal: SIZES.padding,
          // borderRadius: 20,
          backgroundColor: COLORS.caribbeanGreen,
        }}
        labelStyle={{
          color: COLORS.black,
        }}
      />
    );
  }
  if (courses) {
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
        >
          {renderCoursesTitle()}
        </View>

        <View
          style={{
            flex: 4,
            backgroundColor: COLORS.lightTextGray,
            borderTopRightRadius: SIZES.radius * 2,
            borderTopLeftRadius: SIZES.radius * 2,
          }}
        >
          <View style={{ padding: SIZES.padding2 }}>
            {renderCourseOptions()}
          </View>
        </View>

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
  } else {
    return <></>;
  }
};

export default CourseDescriptionScreen;
