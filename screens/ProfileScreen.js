import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import { LineDivider, ProfileValue, ProgressBar } from "../components";

import { COLORS, FONTS, SIZES, icons, images } from "../constants";

const ProfileScreen = () => {
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
          }}
        >
          My Profile
        </Text>
        <Image
          source={icons.profile_icon}
          resizeMode="contain"
          style={{ width: 20, height: 20 }}
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
          backgroundColor: COLORS.darkBlue,
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
            source={icons.plus_icon}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 40,
              borderWidth: 1,
              borderColor: COLORS.white,
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
                backgroundColor: COLORS.lightBlue,
              }}
            >
              <Image
                source={icons.read_icon}
                resizeMode="contain"
                style={{
                  width: 17,
                  height: 17,
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
              color: COLORS.lightGray,
              ...FONTS.h2,
            }}
          >
            Davi
          </Text>

          <Text
            style={{
              color: COLORS.lightGray,
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
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
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
    </View>
  );
};

const styles = StyleSheet.create({
  profileSectionContainer: {
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray1,
  },
});
export default ProfileScreen;
