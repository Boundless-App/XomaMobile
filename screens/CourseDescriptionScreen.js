import React from "react";
import { View, Text, SafeAreaView, Animated, FlatList } from "react-native";

import { COLORS, FONTS, SIZES, icons, constants } from "../constants";
import { IconButton, LineDivider, SelectTab, TextButton } from "../components";

import CourseDesption from "./CoursesTabs/CourseDesption";
import CourseContent from "./CoursesTabs/CourseContent";
import CourseDiscussion from "./CoursesTabs/CourseDiscussion";

const CourseDescriptionScreen = ({ route, navigation }) => {
  // const [selectedTab, setSelectedTab] = React.useState(0);
  const [courses, setCourses] = React.useState(null);
  const flatListRef = React.useRef();
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const onTabPress = React.useCallback((tabIndex) => {
    flatListRef?.current?.scrollToOffset({
      offset: tabIndex * SIZES.width,
    });
  });

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
      // <View
      //   style={{
      //     flexDirection: "row",
      //   }}
      // >
      //   <SelectTab
      //     containerStyle={{
      //       width: "30%",
      //     }}
      //     label="Description"
      //     selected={selectedTab == 0}
      //     onPress={() => setSelectedTab(0)}
      //   />
      //   <SelectTab
      //     containerStyle={{
      //       width: "30%",
      //     }}
      //     label="Content"
      //     selected={selectedTab == 1}
      //     onPress={() => setSelectedTab(1)}
      //   />
      // </View>
      <View
        style={{
          flex: 1,
        }}
      >
        {/* Tabs */}
        <View
          style={{
            height: 60,
          }}
        >
          <SelectTab scrollX={scrollX} onTabPress={onTabPress} />
        </View>
        {/* Line */}
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.lightGray3,
          }}
        />

        {/* Content */}
        <Animated.FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          keyboardDismissMode="on-drag"
          showsHorizontalScrollIndicator={false}
          data={constants.course_details_tabs}
          keyExtractor={(item) => `CourseDetailTabs-${item.id}`}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: SIZES.width,
                }}
              >
                {index == 0 && <CourseDesption />}
                {index == 1 && <CourseContent />}
                {index == 2 && <CourseDiscussion />}
              </View>
            );
          }}
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
          color: COLORS.white,
        }}
      />
    );
  }
  if (courses) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGray3,
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
          {renderCourseOptions()}
        </View>

        <View
          style={{
            height: "7%",
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
