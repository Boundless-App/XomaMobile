import React from "react";
import {
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  FlatList,
  SafeAreaView,
  Linking,
} from "react-native";

import { HorizontalCourseCard, IconButton } from "../components";
import { COLORS, FONTS, SIZES, icons, resources } from "../constants";

const ResourcesScreen = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          height: 50,
          // backgroundColor: COLORS.lightRed,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          icon={icons.back_icon}
          onPress={() => navigation.goBack()}
          iconStyle={{
            tintColor: COLORS.white,
          }}
          containerStyle={{
            // marginVertical: "8%",
            // marginHorizontal: "8%",
            // position: "absolute",
            top: 10,
            left: 20,
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            backgroundColor: COLORS.transparentBlack,
            borderRadius: SIZES.padding,
          }}
        />
        <Text
          style={{
            ...FONTS.h4,
            paddingTop: SIZES.font,
            marginLeft: SIZES.padding,
            alignItems: "center",
          }}
        >
          RESOURCES
        </Text>
        <View
          style={{
            marginLeft: "10%",
          }}
        ></View>
      </View>
    );
  }

  function renderResources() {
    return (
      <FlatList
        data={resources}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          // paddingBottom: SIZES.padding * 2,
        }}
        renderItem={(data, rowMap) => (
          <View
            style={{
              height: 100,
              backgroundColor: COLORS.lightGray2,
              flexDirection: "row",
              alignItems: "center",
              marginTop: SIZES.padding,
              paddingHorizontal: SIZES.radius,
              borderRadius: SIZES.radius,
              elevation: 10,
            }}
          >
            {/* Resource Image */}
            <View
              style={{
                width: 90,
                height: 100,
                marginLeft: -10,
              }}
            >
              <Image
                source={data.item.resource_image}
                resizeMode="contain"
                style={{
                  width: "70%",
                  height: "70%",
                  position: "absolute",
                  top: 15,
                }}
              />
            </View>
          </View>
        )}
      />
    );
  }
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: COLORS.lightBlue,
      }}
    >
      {renderHeader()}

      {renderResources()}
    </View>
  );
};

export default ResourcesScreen;
