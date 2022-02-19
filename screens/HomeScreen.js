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

import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  coursesData,
  books,
} from "../constants";

import {
  Carousel,
  CartQuantityBtn,
  HorizontalCourseCard,
  IconButton,
  LineDivider,
  Section,
} from "../components";
import { dummy, dummyData } from "../data/Data";

// import AutoScroll from "@homielab/react-native-auto-scroll";
import SectionCard from "../components/SectionCard";

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

  const [profile, setProfile] = React.useState(profileData);
  const [content, setContent] = React.useState(contentData);
  const [myTrends, setMyTrends] = React.useState(trends);

  function renderHeader(profile) {
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
            <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>
              Hello {profile.name},
            </Text>
          </View>
        </View>

        {/* Icons */}

        {/* Notifications */}
        {/* <IconButton
          icon={icons.notification_icon}
          iconStyle={{
            tintColor: COLORS.lightGray,
            width: 25,
            height: 25,
          }}
          onPress={() => navigation.navigate("Notifications")}
          containerStyle={{
            paddingRight: "4%",
          }}
        /> */}

        {/* Cart */}

        <CartQuantityBtn
          // quantity={0}
          onPress={() => navigation.navigate("Cart")}
          containerStyle={{
            backgroundColor: COLORS.secondary,
          }}
          iconStyle={{
            tintColor: COLORS.lightGray,
            width: 25,
            height: 25,
          }}
        />
      </View>
    );
  }

  // Advertisements
  function renderSlider() {
    // const renderItem = ({ item, index }) => {
    return (
      // <AutoScroll endPadding={1}>
      //   <TouchableOpacity
      //     style={{
      //       borderRadius: SIZES.radius,
      //       alignItems: "center",
      //       justifyContent: "center",
      //       marginRight: SIZES.base,
      //       marginLeft: index == 0 ? SIZES.padding2 : 0,
      //     }}
      //   >
      //     <Image
      //       source={item.poster}
      //       resizeMode="cover"
      //       style={{ width: 350, height: 160, borderRadius: 20 }}
      //     />
      //     <View
      //       style={{
      //         position: "absolute",
      //         bottom: 0,
      //         height: 50,
      //         width: SIZES.width * 0.3,
      //         backgroundColor: COLORS.white,
      //         borderTopRightRadius: SIZES.radius,
      //         borderBottomLeftRadius: SIZES.radius,
      //         alignItems: "center",
      //         justifyContent: "center",
      //         flexDirection: "row-reverse",
      //         alignSelf: "flex-start",
      //       }}
      //     >
      //       <Text style={{ ...FONTS.h4 }}>{item.details}</Text>
      //     </View>
      //   </TouchableOpacity>
      // </AutoScroll>
      <View>
        <Carousel data={dummy} />
        {/* <StatusBar style="auto" /> */}
      </View>
    );
  }

  //   return (
  //     <FlatList
  //       data={content}
  //       horizontal
  //       showsHorizontalScrollIndicator={false}
  //       keyExtractor={(item) => `${item.id}`}
  //       renderItem={renderItem}
  //     />
  //   );
  // }

  //Cards
  function renderOptions() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: "85%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          //marginTop: SIZES.padding,
        }}
      >
        <View
          style={{
            flexDirection: "column",
          }}
        >
          <SectionCard
            sectionTitle="Go Shopping"
            icon={icons.trolley}
            iconStyle={{
              tintColor: COLORS.secondary,
            }}
            // iconContainer={{
            //   backgroundColor: COLORS.white,
            // }}
            containerStyle={{
              marginLeft: SIZES.padding,
              marginBottom: SIZES.base,
            }}
            onPress={() => navigation.navigate("ShopScreen")}
          />

          <SectionCard
            sectionTitle="Resources & Opportunities"
            icon={icons.human_resource}
            iconStyle={{
              tintColor: COLORS.secondary,
            }}
            // iconContainer={{
            //   backgroundColor: COLORS.white,
            // }}
            containerStyle={{
              marginLeft: SIZES.padding,
              height: 200,
            }}
            onPress={() => navigation.navigate("ResOps")}
            //Lessons
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            marginLeft: SIZES.base,
            //height: "50%",
          }}
        >
          <SectionCard
            sectionTitle="Start Learning"
            icon={icons.reading}
            iconStyle={{
              tintColor: COLORS.secondary,
            }}
            // iconContainer={{
            //   backgroundColor: COLORS.white,
            // }}
            containerStyle={{
              marginRight: SIZES.padding,
              marginBottom: SIZES.base,
              height: 200,
            }}
            onPress={() => navigation.navigate("CoursesScreen")}
          />

          <SectionCard
            sectionTitle="Book a Mentor"
            icon={icons.mentor}
            iconStyle={{
              tintColor: COLORS.secondary,
            }}
            // iconContainer={{
            //   backgroundColor: COLORS.white,
            // }}
            containerStyle={{
              marginRight: SIZES.padding,
            }}
            onPress={() => navigation.navigate("BookAMentor")}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: COLORS.lightGray,
      }}
    >
      {/* Header Section */}
      <View
        style={{
          height: "10%",
          //backgroundColor: COLORS.secondary,
        }}
      >
        {renderHeader(profile)}
      </View>

      {/* Body Section */}
      <View
        style={{
          flexDirection: "column",
          // marginTop: SIZES.padding * 2,
          marginTop: SIZES.padding,
        }}
      >
        {/* Top Slider */}
        <View>{renderSlider()}</View>
      </View>

      <View
        style={{
          //marginTop: SIZES.padding,
          //backgroundColor: COLORS.secondary,
          height: "45%",
          // height: "80%",
        }}
      >
        <View>{renderOptions()}</View>
      </View>
    </View>
  );
};

export default HomeScreen;
