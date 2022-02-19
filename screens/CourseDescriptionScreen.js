import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Animated,
  TouchableOpacity,
} from "react-native";

import { COLORS, FONTS, SIZES, icons, constants } from "../constants";
import {
  Header,
  HeaderTwo,
  IconButton,
  LineDivider,
  TextButton,
} from "../components";

import CourseDesption from "./CoursesTabs/CourseDesption";
import CourseContent from "./CoursesTabs/CourseContent";
import CourseDiscussion from "./CoursesTabs/CourseDiscussion";

const course_details_tabs = constants.course_details_tabs.map(
  (course_details_tab) => ({
    ...course_details_tab,
    ref: React.createRef(),
  })
);
// Tab Indicator Component
const TabIndicator = ({ measureLayout, scrollX }) => {
  const inputRange = course_details_tabs.map((_, i) => i * SIZES.width);

  const tabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((measure) => measure.width),
  });

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((measure) => measure.x),
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        height: 4,
        width: tabIndicatorWidth,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.secondary,
        bottom: 0,
        transform: [
          {
            translateX,
          },
        ],
      }}
    />
  );
};

// Select Tab Component
const SelectTab = ({ scrollX, onTabPress }) => {
  const [measureLayout, setMeasureLayout] = React.useState([]);
  const containerRef = React.useRef();

  React.useEffect(() => {
    let ml = [];

    course_details_tabs.forEach((course_details_tab) => {
      course_details_tab?.ref?.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          ml.push({
            x,
            y,
            width,
            height,
          });
          if (ml.length === course_details_tabs.length) {
            setMeasureLayout(ml);
          }
        }
      );
    });
  }, [containerRef.current]);
  return (
    <View
      ref={containerRef}
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      {/* Tab indicator */}
      {measureLayout.length > 0 && (
        <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
      )}
      {/* Tabs */}
      {course_details_tabs.map((item, index) => {
        return (
          <TouchableOpacity
            key={`Tab-${index}`}
            ref={item.ref}
            style={{
              flex: 1,
              paddingHorizontal: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              onTabPress(index);
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
                fontSize: SIZES.height > 800 ? 18 : 17,
                color: COLORS.textGray,
              }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

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
        {/* <IconButton
          icon={icons.back_icon}
          onPress={() => navigation.goBack()}
          iconStyle={{
            tintColor: COLORS.white,
          }}
          containerStyle={{
            // marginVertical: "8%",
            // marginHorizontal: "8%",
            position: "absolute",
            top: 10,
            left: 20,
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            backgroundColor: COLORS.transparentBlack,
            borderRadius: SIZES.padding,
          }}
        /> */}
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
      <View
        style={{
          marginBottom: SIZES.padding,
          marginHorizontal: SIZES.padding,
        }}
      >
        <TextButton
          label="Enroll"
          contentContainerStyle={{
            height: "100%",
            paddingHorizontal: SIZES.padding,
            borderRadius: 12,
            backgroundColor: COLORS.caribbeanGreen,
          }}
          labelStyle={{
            color: COLORS.white,
          }}
          onPress={() => navigation.navigate("CourseAttempt")}
        />
      </View>
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
        {/* <HeaderTwo
          onPress={() => navigation.goBack()}
          icon={icons.back_icon}
          iconStyle={{ marginRight: "60%" }}
        /> */}
        <IconButton
          icon={icons.back_icon}
          onPress={() => navigation.goBack()}
          iconStyle={{
            tintColor: COLORS.white,
          }}
          containerStyle={{
            position: "absolute",
            top: 10,
            left: 20,
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            backgroundColor: COLORS.transparentBlack,
            borderRadius: SIZES.padding,
          }}
        />
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
            height: "9%",
            backgroundColor: COLORS.lightTextGray,
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
