import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { IconButton, LineDivider, TextButton } from "../components";

const CourseAttempt = ({ navigation }) => {
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
      ></View>

      {/* <View
        style={{
          flex: 4,
          backgroundColor: COLORS.lightTextGray,
          borderTopRightRadius: SIZES.radius * 2,
          borderTopLeftRadius: SIZES.radius * 2,
        }}
      ></View> */}

      <View
        style={{
          height: "30%",
          backgroundColor: COLORS.lightTextGray,
        }}
      >
        {renderButtons()}
        <LineDivider lineStyle={{ backgroundColor: COLORS.lightGray3 }} />
      </View>
    </View>
  );
};

export default CourseAttempt;
