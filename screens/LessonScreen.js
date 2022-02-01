import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  StatusBar,
} from "react-native";

import { COLORS, FONTS, SIZES, images, coursesData } from "../constants";

import { HorizontalCourseCard, LineDivider, Section } from "../components";

import AutoScroll from "@homielab/react-native-auto-scroll";

const LessonScreen = ({ navigation }) => {
  const profileData = {
    name: "Eugenia",
  };

  const bookOne = {
    id: 1,
    bookName: "level 31",
    bookCover: images.bookLover,
    description: "Awesome read",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000",
  };
  const bookTwo = {
    id: 2,
    bookName: "Creative Thinking",
    bookCover: images.bookLover,
    description: "Awesome read",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000",
  };
  const bookThree = {
    id: 3,
    bookName: "Kavuyo",
    bookCover: images.knowledge,
    description: "Awesome read",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000",
  };
  const bookFour = {
    id: 4,
    bookName: "Tumu",
    bookCover: images.ladyReading,
    description: "Awesome read",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000",
  };
  const bookFive = {
    id: 5,
    bookName: "Beyond the Mountains",
    bookCover: images.seatedOnBooks,
    description: "Awesome read",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000",
  };

  const trends = [
    {
      ...bookOne,
    },
    {
      ...bookTwo,
    },
    {
      ...bookThree,
    },
    {
      ...bookFour,
    },
    {
      ...bookFive,
    },
  ];

  //poster pics
  const contentData = [
    {
      id: 1,
      item: "course",
      poster: images.collecting,
      details: "Ads details",
    },
    {
      id: 2,
      item: "workshop",
      poster: images.collecting,
      details: "Ads details",
    },
    {
      id: 3,
      item: "opportunity",
      poster: images.collecting,
      details: "Ads details",
    },
  ];

  const [content, setContent] = React.useState(contentData);
  const [myTrends, setMyTrends] = React.useState(trends);

  function renderHeader() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingTop: SIZES.padding,
          paddingHorizontal: SIZES.padding2 * 1.5,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.secondary,
          borderBottomRightRadius: 60,
        }}
      >
        <StatusBar backgroundColor={COLORS.status} />

        {/* Greetings */}
        <View style={{ flex: 6, paddingRight: "20%" }}>
          <View style={{ marginTop: SIZES.padding, marginBottom: SIZES.base }}>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.lightGray,
              }}
            >
              Workshops
            </Text>
          </View>
        </View>
      </View>
    );
  }

  // Advertisements
  function renderSlider() {
    const renderItem = ({ item, index }) => {
      return (
        <AutoScroll endPadding={1}>
          <TouchableOpacity
            style={{
              borderRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              marginRight: SIZES.base,
              marginLeft: index == 0 ? SIZES.padding2 : 0,
            }}
          >
            <Image
              source={item.poster}
              resizeMode="cover"
              style={{ width: 350, height: 160, borderRadius: 20 }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                height: 50,
                width: SIZES.width * 0.3,
                backgroundColor: COLORS.white,
                borderTopRightRadius: SIZES.radius,
                borderBottomLeftRadius: SIZES.radius,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row-reverse",
                alignSelf: "flex-start",
              }}
            >
              <Text style={{ ...FONTS.h4 }}>{item.details}</Text>
            </View>
          </TouchableOpacity>
        </AutoScroll>
      );
    };

    return (
      <FlatList
        data={content}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
      />
    );
  }

  // // Shop books
  function renderMyTrendsSection(myTrends) {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding2 : 0,
            marginRight: SIZES.padding,
          }}
          onPress={() =>
            navigation.navigate("BookDescriptionScreen", {
              books: item,
            })
          }
        >
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{ width: 180, height: 250, borderRadius: 20 }}
          />
          <Text
            style={{
              ...FONTS.body4,
            }}
          >
            {item.bookName}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        {/* Header */}

        <Section
          title="Trending Books"
          onPress={() => navigation.navigate("ShopScreen")}
        />
        {/* Books */}
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          <FlatList
            data={myTrends}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  // Course list
  function renderCoursesHeader() {
    return (
      <Section
        title="Popular Courses"
        onPress={() => navigation.navigate("CoursesScreen")}
      />
    );
  }

  function renderCoursesData() {
    return (
      <FlatList
        data={coursesData.coursesData}
        listKey="Courses"
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `Courses-${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
        renderItem={({ item, index }) => (
          <HorizontalCourseCard
            course={item}
            containerStyle={{
              paddingTop: SIZES.padding2,
              paddingBottom: SIZES.padding2,
              marginTop: index == 0 ? SIZES.base : SIZES.padding,
            }}
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
              marginTop: SIZES.base,
            }}
          />
        )}
      />
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
      {/* Header Section */}
      <View style={{ height: "7%" }}>{renderHeader()}</View>

      {/* Body Section */}
      <View style={{ marginTop: SIZES.padding }}>
        {/* Top Slider */}
        <View>{renderSlider()}</View>

        {/* Trending Books Slider */}
        <View style={{ marginTop: SIZES.padding2 }}>
          {renderMyTrendsSection(myTrends)}
        </View>

        {/* Courses Slider */}
        <View style={{ marginTop: SIZES.padding2 }}>
          <View>{renderCoursesHeader()}</View>
          <View
            style={{
              marginTop: SIZES.base,
              marginBottom: SIZES.radius,
            }}
          >
            {renderCoursesData()}
          </View>
        </View>
      </View>
    </View>
  );
};

export default LessonScreen;
