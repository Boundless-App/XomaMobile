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

import {
  HeaderTwo,
  HorizontalCourseCard,
  IconButton,
  LineDivider,
} from "../components";
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  resources,
  dummyData,
} from "../constants";

const ResourcesScreen = ({ navigation }) => {
  function renderHeader() {
    return (
      <HeaderTwo
        icon={icons.back_icon}
        iconStyle={{ marginRight: "55%" }}
        onPress={() => navigation.goBack()}
        heading={"Resources"}
        textStyle={{ marginRight: 50 }}
      />
    );
  }

  function renderResources() {
    return (
      <FlatList
        data={resources.resources}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.base,
          paddingHorizontal: SIZES.padding,
        }}
        scrollEventThrottle={3}
        showsVerticalScrollIndicator={false}
        renderItem={(data, rowMap) => (
          <View
            style={{
              height: 120,
              backgroundColor: COLORS.lightGray2,
              flexDirection: "row",
              alignItems: "center",
              marginTop: SIZES.base,
              marginBottom: SIZES.base,
              paddingHorizontal: SIZES.radius,
              borderRadius: SIZES.radius,
              elevation: 2,
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
            {/* Info */}
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  ...FONTS.h4,
                }}
              >
                {data.item.resource_title}
              </Text>
              <Text
                style={{
                  ...FONTS.body5,
                }}
              >
                {data.item.description}
              </Text>
              {/* URL */}
              <View>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(data.item.link);
                  }}
                >
                  <Text style={{ ...FONTS.body5, color: COLORS.lightBlue }}>
                    CLICK TO DOWNLOAD
                  </Text>
                </TouchableOpacity>
              </View>
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
        // backgroundColor: COLORS.lightGray2,
      }}
    >
      {renderHeader()}
      <View
        style={{
          marginTop: SIZES.padding2,
          alignItems: "center",
          marginHorizontal: SIZES.base,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.textGray,
          }}
        >
          {/* Take advantage of free resources to guide you on your learning or
          teaching journey */}
          {dummyData.Heading1.heading}
        </Text>
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.lightGray3,
          }}
        />
      </View>
      {renderResources()}
    </View>
  );
};

export default ResourcesScreen;
