import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { HeaderTwo, IconButton } from "../components";
import { COLORS, constants, FONTS, SIZES, images, icons } from "../constants";

const BookAMentor = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <HeaderTwo
        icon={icons.back_icon}
        iconStyle={{ marginRight: "60%" }}
        onPress={() => navigation.goBack()}
        heading={"Mentor"}
        textStyle={{ marginRight: 50 }}
      />
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.white,
        }}
      >
        {/* <IconButton
          icon={icons.back_arrow_icon}
          onPress={() => navigation.goBack()}
          iconStyle={{
            tintColor: COLORS.primary,
          }}
          containerStyle={{
            position: "absolute",
            top: 10,
            left: 20,
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        /> */}
        <ImageBackground
          source={images.coming_soon}
          style={{
            //flex: 1,
            alignItems: "center",
            justifyContent: "center",
            height: "50%",
            width: "100%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              ...FONTS.h1,
              color: COLORS.secondary,
            }}
          >
            Coming Soon!
          </Text>
        </ImageBackground>
      </View>
    </View>
  );
};

export default BookAMentor;
