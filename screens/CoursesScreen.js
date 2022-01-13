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
import { LineDivider, TextButton } from "../components";
import { HorizontalCourseCard } from "../components";

const VerticalLineDivider = () => {
  return (
    <View
      style={{
        width: 1,
        paddingVertical: 15,
      }}
    >
      <View
        style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1 }}
      ></View>
    </View>
  );
};

const CoursesScreen = ({ navigation }) => {
  function renderButtonSection() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: SIZES.padding,
        }}
      >
        <StatusBar />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: 70,
            borderRadius: SIZES.radius,
          }}
        >
          {/* Resources */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("Resources")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.h3,
                  color: COLORS.lightGray,
                }}
              >
                Resources
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          {VerticalLineDivider()}

          {/* Opportunities */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("Opportunities")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.h3,
                  color: COLORS.lightGray,
                }}
              >
                Opportunities
              </Text>
            </View>
          </TouchableOpacity>
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
              paddingTop: SIZES.padding2,
              paddingBottom: SIZES.padding2,
              marginTop: index == 0 ? SIZES.padding2 : SIZES.padding,
            }}
            onPress={() =>
              navigation.navigate("CourseDescriptionScreen", {
                courses: item,
              })
            }
          />
        )}
        // ItemSeparatorComponent={() => (
        //   <LineDivider
        //     lineStyle={{
        //       backgroundColor: COLORS.lightTextGray,
        //       marginTop: SIZES.base,
        //     }}
        //   />
        // )}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.secondary,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        {renderButtonSection()}
      </View>

      <View
        style={{
          flex: 9,
          backgroundColor: COLORS.lightGray,
          borderTopRightRadius: SIZES.radius * 2,
          borderTopLeftRadius: SIZES.radius * 2,
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
