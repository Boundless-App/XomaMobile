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

import { COLORS, FONTS, SIZES, icons, images, coursesData } from "../constants";

import {
  HorizontalCourseCard,
  IconButton,
  LineDivider,
  Section,
} from "../components";

const HomeScreen = ({ navigation }) => {
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

  const contentData = [
    {
      id: 1,
      item: "course",
      poster: images.kidWantsBook,
      details: "Ads details",
    },
    {
      id: 2,
      item: "workshop",
      poster: images.kidWantsBook,
      details: "Ads details",
    },
    {
      id: 3,
      item: "opportunity",
      poster: images.kidWantsBook,
      details: "Ads details",
    },
  ];

  const [profile, setProfile] = React.useState(profileData);
  const [content, setContent] = React.useState(contentData);
  const [myTrends, setMyTrends] = React.useState(trends);
  // const [courses, setCourses] = React.useState(coursesData);
  // const [selectedCourse, setSelectedCourse] = React.useState(1);

  function renderHeader(profile) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingTop: SIZES.radius,
          paddingHorizontal: SIZES.padding2 * 1.5,
          alignItems: "center",
          justifyContent: "center",
          //backgroundColor: COLORS.orange,
        }}
      >
        <StatusBar backgroundColor="#2D3038" />
        {/* Greetings */}
        <View style={{ flex: 6, paddingRight: "20%" }}>
          <View style={{ marginTop: SIZES.padding, marginBottom: SIZES.base }}>
            <Text style={{ ...FONTS.h1, color: COLORS.primary }}>Hello </Text>
            <Text style={{ ...FONTS.h1, color: COLORS.primary }}>
              {profile.name}
            </Text>
          </View>
        </View>
        {/* Icons */}
        {/* <View
          style={{
            flex: 1,
            alignItems: "flex-end",
          }}
        > */}
        <IconButton
          icon={icons.notification_icon}
          iconStyle={{
            tintColor: COLORS.primary,
          }}
          onPress={() => console.log("Notifications")}
          containerStyle={{
            paddingRight: "8%",
          }}
        />
        {/* <View
            style={{
              // flex: 1,
              position: "absolute",
              top: -1,
              right: -1,
              height: 10,
              width: 10,
              // marginLeft: "10%",

              // paddingHorizontal: "20%",
              borderRadius: SIZES.radius,

              justifyContent: "flex-end",
              backgroundColor: COLORS.lightRed,
            }}
          ></View>
        </View>
        <View style={{ flex: 1 }}></View> */}
        <IconButton
          icon={icons.cart_icon}
          iconStyle={{
            tintColor: COLORS.primary,
          }}
          onPress={() => navigation.navigate("Cart")}
        />
      </View>
    );
  }

  function renderSlider() {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={{
            //padding: SIZES.padding,
            //paddingBottom: SIZES.radius,
            //backgroundColor: COLORS.darkBlue,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            marginLeft: index == 0 ? SIZES.padding2 : 0,
          }}
        >
          <Image
            source={item.poster}
            resizeMode="cover"
            // style={{ width: 300, height: 200 }}
            style={{ width: 300, height: 110, borderRadius: 20 }}
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

  function renderCoursesHeader() {
    // const renderItem = ({ item }) => {
    //   return (
    //     <TouchableOpacity
    //       style={{ flex: 1, marginRight: SIZES.radius }}
    //       onPress={() => setSelectedCourse(item.id)}
    //     >
    //       {selectedCourse == item.id && (
    //         <Text style={{ ...FONTS.body4, color: COLORS.black}}>
    //           {item.categoryName}
    //         </Text>
    //       )}
    //       {selectedCourse != item.id && (
    //         <Text style={{ ...FONTS.body4, color: COLORS.lightGray4 }}>
    //           {item.categoryName}
    //         </Text>
    //       )}
    //     </TouchableOpacity>
    //   );
    // };

    return (
      // <View style={{ flex: 1, paddingLeft: SIZES.radius }}>
      //   <FlatList
      //     data={courses}
      //     showsHorizontalScrollIndicator={false}
      //     renderItem={renderItem}
      //     keyExtractor={(item) => `${item.id}`}
      //     horizontal
      //   />
      // </View>
      <Section
        title="Popular Courses"
        onPress={() => navigation.navigate("CoursesScreen")}
      />
    );
  }

  function renderCoursesData() {
    //   var myCourses = [];

    //   let selectedCourses = myCourses.filter((a) => a.id == selectedCourse);

    //   if (selectedCourses.length > 0) {
    //     courses = selectedCourses[0].myCourses;
    //   }

    //   const renderItem = ({ item }) => {
    //     return (
    //       <View style={{ marginVertical: SIZES.base }}>
    //         <TouchableOpacity
    //           style={{ flex: 1, flexDirection: "row" }}
    //           onPress={() => console.log("Courses Data")}
    //         >
    //           {/* Course Cover */}
    //           <Image
    //             source={item.courseCover}
    //             resizeMode="cover"
    //             style={{ width: 100, height: 150, borderRadius: 10 }}
    //           />

    //           {/* <View style={{ flex: 1, marginLeft: SIZES.radius }}> */}
    //           {/* Course Name and Progress */}
    //           {/* <View>
    //               <Text>{item.courseName}</Text>
    //             </View>
    //           </View> */}
    //         </TouchableOpacity>
    //       </View>
    //     );
    //   };

    //   return (
    //     <View
    //       style={{
    //         flex: 1,
    //         marginTop: SIZES.padding2,
    //         paddingLeft: SIZES.padding2,
    //       }}
    //     >
    //       <FlatList
    //         data={courses}
    //         renderItem={renderItem}
    //         keyExtractor={(item) => `${item.id}`}
    //         showsVerticalScrollIndicator={false}
    //       />
    //     </View>
    //   );
    // }
    return (
      <FlatList
        data={coursesData.coursesData}
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
            }}
          />
        )}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
      {/* Header Section */}
      <View style={{ height: "17%" }}>{renderHeader(profile)}</View>
      {/* Body Section */}
      <ScrollView style={{ marginTop: SIZES.padding }}>
        {/* Top Slider */}
        <View>{renderSlider()}</View>
        {/* Trending Books Section */}
        <View style={{ marginTop: SIZES.padding2 }}>
          {renderMyTrendsSection(myTrends)}
        </View>
        {/* Courses Section */}
        <View style={{ marginTop: SIZES.padding2 }}>
          <View>{renderCoursesHeader()}</View>
          <View style={{ marginTop: SIZES.base, marginBottom: SIZES.radius }}>
            {renderCoursesData()}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
