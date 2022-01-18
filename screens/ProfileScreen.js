import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import {
  LineDivider,
  ProfileValue,
  ProgressBar,
  TextButton,
} from "../components";

import { COLORS, FONTS, SIZES, icons, images } from "../constants";

const ProfileScreen = ({navigation}) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 70,
          paddingHorizontal: SIZES.padding,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            ...FONTS.h1,
            color: COLORS.primary,
          }}
        >
          My Profile
        </Text>

        <Image
          source={icons.profile_icon}
          resizeMode="contain"
          style={{ width: 40, height: 40, tintColor: COLORS.primary }}
        />
      </View>
    );
  }

  function renderProfileCard() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 20,
          borderRadius: SIZES.radius,
          borderColor: COLORS.secondary,
          borderWidth: 2,
        }}
      >
        {/* Profile Image */}
        <TouchableOpacity
          style={{
            width: 80,
            height: 80,
          }}
        >
          <Image
            source={icons.profile_icon}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 40,
              borderWidth: 2,
              borderColor: COLORS.primary,
              tintColor: COLORS.primary,
            }}
          />

          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                marginBottom: -15,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
                backgroundColor: COLORS.primary,
              }}
            >
              <Image
                source={icons.camera}
                resizeMode="contain"
                style={{
                  width: 17,
                  height: 17,
                  tintColor: COLORS.white,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* Details */}
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.h2,
            }}
          >
            Davi
          </Text>

          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.h4,
            }}
          >
            Dev
          </Text>

          {/* Progress */}
          <ProgressBar
            progress="60%"
            containerStyle={{
              marginTop: SIZES.radius,
            }}
            progressStyle={{
              backgroundColor: COLORS.secondary,
            }}
          />

          <View></View>
        </View>
      </View>
    );
  }

  function renderProfileSection() {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileValue icon={icons.read_icon} label="Name" value="Eugena" />
        <LineDivider />
        <ProfileValue
          icon={icons.read_icon}
          label="Email"
          value="eugena@hello.com"
        />
        <LineDivider />
        <ProfileValue icon={icons.read_icon} label="Password" value="******" />
        <LineDivider lineStyle={{backgroundColor: COLORS.secondary}}/>
        <TextButton
          label="Log out"
          labelStyle={{
            color: COLORS.primary,
          }}
          contentContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.transparent,
          }}
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    );
  }

  function renderXomaLogo() {
    return (
      <View
        style={{
          // flex: 5,
          // flexDirection: "row",
          // position: "relative",
          width: "100%",
          //height: 300,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 120,
          //backgroundColor: COLORS.black,
        }}
      >
        <Image
          source={images.xomaLogo}
          resizeMode="contain"
          style={{
            width: 120,
            height: 120,
            tintColor: COLORS.secondary,
          }}
        />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray,
      }}
    >
      {/* Header */}
      {renderHeader()}

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: 150,
        }}
      >
        {/* Profile Card */}
        {renderProfileCard()}

        {/* Profile Section */}
        {renderProfileSection()}
      </ScrollView>

      {/* Xoma Logo */}
      {renderXomaLogo()}
    </View>
  );
};

const styles = StyleSheet.create({
  profileSectionContainer: {
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    borderWidth: 2,
    borderRadius: SIZES.radius,
    borderColor: COLORS.primary,
  },
});
export default ProfileScreen;
