import React from "react";
import { View, Text, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { constants, images, FONTS, COLORS, SIZES } from "../../constants";

const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.lightGray,
        paddingHorizontal: SIZES.radius,
        paddingTop: SIZES.radius * 3
      }}
    >
      <KeyboardAvoidingView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          paddingVertical: SIZES.padding,
          
        }}
      >
        {/* App Icon */}
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={images.xomaLogo}
            resizeMode="contain"
            style={{
              height: 100,
              width: 200,
              tintColor: COLORS.secondary,
              margin: SIZES.radius,
            }}
          />
        </View>
        
        <ScrollView
        showsVerticalScrollIndicator={false}
        >

        {/* Title & Subtitle */}
        <View
          style={{
            marginTop: SIZES.padding,
            ...titleContainerStyle,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              ...FONTS.h2,
            }}
          >
            {title}
          </Text>

          <Text
            style={{
              textAlign: "center",
              color: COLORS.primary,
              marginTop: SIZES.base,
              ...FONTS.body3,
            }}
          >
            {subtitle}
          </Text>
        </View>
        {/* Content & Children */}
        {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AuthLayout;
