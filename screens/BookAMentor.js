import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { IconButton } from "../components";
import { COLORS, constants, FONTS, SIZES, images, icons } from "../constants";

const BookAMentor = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
      }}
    >
      <IconButton
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
      />
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
          Comming Soon!
        </Text>
      </ImageBackground>
    </View>
  );
};

export default BookAMentor;
