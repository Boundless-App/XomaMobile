import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

import { COLORS, FONTS, SIZES, icons, images } from "../constants";

const HomeScreen = ({ navigation }) => {
  const profileData = {
    name: "Eugena",
  };

  const bookOne = {
    id: 1,
    bookName: "level 31",
    bookCover: images.bookPackageLevel2,
    description: "Awesome read",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000",
  };
  const bookTwo = {
    id: 2,
    bookName: "Creative Thinking",
    bookCover: images.adultColoringBook,
    description: "Awesome read",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000",
  };
  const bookThree = {
    id: 3,
    bookName: "Kavuyo",
    bookCover: images.kavuyo,
    description: "Awesome read",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000",
  };
  const bookFour = {
    id: 4,
    bookName: "Tumu",
    bookCover: images.actionWordGame,
    description: "Awesome read",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000",
  };
  const bookFive = {
    id: 5,
    bookName: "Beyond the Mountains",
    bookCover: images.creativeThinkingWorkbook,
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

  const coursesData = [
    {
      id: 1,
      categoryName: "CV Writing",
      courseCover: images.cvWriting,
      //course: [bookFour],
    },
    {
      id: 2,
      categoryName: "Presentation",
      courseCover: images.pitching,
      //course: [bookTwo],
    },
    {
      id: 3,
      categoryName: "Communication",
      courseCover: images.emailCommunication,
      //course: [bookOne],
    },
    {
      id: 4,
      categoryName: "Interview",
      courseCover: images.jobInterview,
      //course: [bookThree],
    },
    {
      id: 5,
      categoryName: "Summary Writing",
      courseCover: images.digitalLiteracy,
      //course: [bookFive],
    },
    // {
    //   id: 6,
    //   categoryName: "Timing",
    //   courseCover: images.underland,
    //   //course: [bookThree],
    // },
    // {
    //   id: 7,
    //   categoryName: "Performance",
    //   courseCover: images.underland,
    //   //course: [bookTwo],
    // },
  ];

  const contentData = [
    {
      id: 1,
      item: "course",
      poster: images.poster1,
    },
    {
      id: 2,
      item: "workshop",
      poster: images.poster4,
    },
    {
      id: 3,
      item: "opportunity",
      poster: images.poster7,
    },
  ];

  const [profile, setProfile] = React.useState(profileData);
  const [content, setContent] = React.useState(contentData);
  const [myTrends, setMyTrends] = React.useState(trends);
  const [courses, setCourses] = React.useState(coursesData);
  const [selectedCourse, setSelectedCourse] = React.useState(1);

  function renderHeader(profile) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingTop: SIZES.padding * 2,
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        {/* Greetings */}
        <View style={{ flex: 1 }}>
          <View style={{ marginRight: SIZES.padding }}>
            <Text style={{ ...FONTS.h3 }}>Hello {profile.name}</Text>
          </View>
        </View>
        {/* Icons */}
        <TouchableOpacity
          style={{
            //backgroundColor: COLORS.lightGray4,
            height: 40,
            paddingLeft: 3,
            paddingRight: 3,
            borderRadius: 50,
            marginRight: 15,
          }}
          onPress={() => {
            console.log("notifications");
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                backgroundColor: COLORS.white,
              }}
            >
              <Image
                source={icons.notification_icon}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            //backgroundColor: COLORS.lightGray4,
            height: 40,
            paddingLeft: 3,
            paddingRight: 3,
            borderRadius: 50,
            marginLeft: 15,
          }}
          onPress={() => {
            navigation.navigate("CartScreen");
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                backgroundColor: COLORS.white,
              }}
            >
              <Image
                source={icons.cart_icon}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function renderSlider() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor: COLORS.darkBlue,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
          }}
        >
          <Image
            source={item.poster}
            resizeMode="contain"
            style={{ width: 400, height: 100 }}
          />
        </TouchableOpacity>
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

  function renderMyTrendsSection(myTrends) {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius,
          }}
          onPress={() =>
            navigation.navigate("BookDescription", {
              book: item,
            })
          }
        >
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{ width: 180, height: 250, borderRadius: 20 }}
          />
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Trending Books</Text>
          <TouchableOpacity onPress={() => navigation.navigate("ShopScreen")}>
            <Text
              style={{
                ...FONTS.body3,
                alignSelf: "flex-start",
                textDecorationLine: "underline",
              }}
            >
              See All
            </Text>
          </TouchableOpacity>
        </View>
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

  function renderCoursesHeader() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ flex: 1, marginRight: SIZES.padding }}
          onPress={() => setSelectedCourse(item.id)}
        >
          {selectedCourse == item.id && (
            <Text style={{ ...FONTS.body4, color: COLORS.black }}>
              {item.categoryName}
            </Text>
          )}
          {selectedCourse != item.id && (
            <Text style={{ ...FONTS.body4, color: COLORS.lightGray4 }}>
              {item.categoryName}
            </Text>
          )}
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
        <FlatList
          data={courses}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          horizontal
        />
      </View>
    );
  }

  function renderCoursesData() {
    var myCourses = [];

    let selectedCourses = myCourses.filter((a) => a.id == selectedCourse);

    if (selectedCourses.length > 0) {
      courses = selectedCourses[0].myCourses;
    }

    const renderItem = ({ item }) => {
      return (
        <View style={{ marginVertical: SIZES.base }}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row" }}
            onPress={() => console.log("Courses Data")}
          >
            {/* Course Cover */}
            <Image
              source={item.courseCover}
              resizeMode="cover"
              style={{ width: 100, height: 150, borderRadius: 10 }}
            />

            {/* <View style={{ flex: 1, marginLeft: SIZES.radius }}> */}
            {/* Course Name and Progress */}
            {/* <View>
                <Text>{item.courseName}</Text>
              </View>
            </View> */}
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View
        style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}
      >
        <FlatList
          data={courses}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray1 }}>
      {/* Header Section */}
      <View style={{ height: 100 }}>{renderHeader(profile)}</View>
      {/* Top Slider */}
      <View>{renderSlider()}</View>
      {/* Body Section */}
      <ScrollView style={{ marginTop: SIZES.radius }}>
        {/* Trending Books Section */}
        <View>{renderMyTrendsSection(myTrends)}</View>
        {/* Courses Section */}
        <View style={{ marginTop: SIZES.padding }}>
          <View>{renderCoursesHeader()}</View>
          <View>{renderCoursesData()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;