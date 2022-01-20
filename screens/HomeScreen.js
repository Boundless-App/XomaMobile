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
  CartQuantityBtn,
  HorizontalCourseCard,
  IconButton,
  LineDivider,
  Section,
} from "../components";

import AutoScroll from "@homielab/react-native-auto-scroll";
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
        }}
      >
        <StatusBar backgroundColor={COLORS.status} />

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

        {/* Notifications */}
        <IconButton
          icon={icons.notification_icon}
          iconStyle={{
            tintColor: COLORS.primary,
          }}
          onPress={() => console.log("Notifications")}
          containerStyle={{
            paddingRight: "4%",
          }}
        />

        {/* Cart */}

        <CartQuantityBtn
          // quantity={0}
          onPress={() => navigation.navigate("Cart")}
          containerStyle={{
            backgroundColor: COLORS.lightGray5,
          }}
        />
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
              style={{ width: 350, height: 150, borderRadius: 20 }}
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

  function renderOptions() {
    return (
      <View
        style={{
          flexDirection: "column",
          height: "75%",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: SIZES.padding * 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <SectionCard
            sectionTitle="Go Shopping"
            icon={images.bookLover}
            containerStyle={{
              margin: SIZES.padding,
            }}
          />

          <SectionCard
            sectionTitle="Start Learning"
            icon={images.bookLover}
            containerStyle={{
              margin: SIZES.padding,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            //height: "50%",
          }}
        >
          <SectionCard
            sectionTitle="Resources & Opportunities"
            icon={images.bookLover}
            containerStyle={{
              margin: SIZES.padding,
            }}
          />

          <SectionCard
            sectionTitle="Book a Mentor"
            icon={images.bookLover}
            containerStyle={{
              margin: SIZES.padding,
            }}
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
          height: "20%",
        }}
      >
        {renderHeader(profile)}
      </View>
      {/* Body Section */}
      <View style={{ flexDirection: "column", marginTop: SIZES.padding }}>
        {/* Top Slider */}
        <View>
          {renderSlider()}
        </View>
        
      </View>
      <View
        style={{
          marginTop: SIZES.padding,
          //backgroundColor: COLORS.secondary,
        }}
      >
        <View>{renderOptions()}</View>
      </View>
    </View>
  );
};

export default HomeScreen;
