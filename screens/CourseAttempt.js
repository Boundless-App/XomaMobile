import { View, Text, ScrollView, FlatList, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES, dummyData2 } from "../constants";
import { IconButton, LineDivider, TextButton } from "../components";

const CourseAttempt = ({ navigation }) => {
  function renderSlides() {
    return (
      <View
        style={{
          flex: 1,
          // backgroundColor: COLORS.black,
          marginVertical: "15%",
        }}
      ></View>
    );
  }

  function renderButtons() {
    return (
      <View
        style={{
          flexDirection: "row",
          top: 0,
          marginVertical: SIZES.base,
          marginHorizontal: SIZES.base,
          padding: 10,
          justifyContent: "space-between",
        }}
      >
        <TextButton
          label="Previous"
          contentContainerStyle={{
            marginLeft: 3,
            backgroundColor: null,
          }}
          labelStyle={{
            color: COLORS.secondary,
            ...FONTS.h3,
          }}
          //   onPress={() => navigation.navigate("SignUp")}
        />
        <TextButton
          label="Next"
          contentContainerStyle={{
            marginLeft: 3,
            backgroundColor: null,
          }}
          labelStyle={{
            color: COLORS.secondary,
            ...FONTS.h3,
          }}
          //   onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    );
  }

  function renderTopics() {
    return (
      <View>
        {dummyData2?.courses_details?.content.map((item, index) => {
          return (
            <View
              key={`Content-${index}`}
              style={{
                flexDirection: "row",
                paddingHorizontal: SIZES.radius,
                alignItems: "center",
                height: 70,
                paddingTop: SIZES.radius,
              }}
            >
              {/* Icon */}
              <View
                style={{
                  backgroundColor: COLORS.lightGray3,
                  width: 60,
                  height: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: SIZES.radius,
                }}
              >
                <Image
                  source={icons.alignLeft_icon2}
                  style={{
                    resizeMode: "contain",
                    width: 20,
                    height: 20,
                    padding: SIZES.padding,
                  }}
                />
              </View>
              {/* Topic */}
              <View
                style={{
                  flex: 1,
                  marginLeft: SIZES.radius,
                }}
              >
                <Text style={{ ...FONTS.body4 }}>{item?.topic}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray3,
      }}
    >
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
          flex: 4,
        }}
      >
        {renderSlides()}
      </View>

      <View
        style={{
          height: "30%",
          backgroundColor: COLORS.lightTextGray,
        }}
      >
        {renderButtons()}
        <LineDivider lineStyle={{ backgroundColor: COLORS.lightGray3 }} />
        {renderTopics()}
      </View>
    </View>
  );
};

export default CourseAttempt;
