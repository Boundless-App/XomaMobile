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

const OpportunitiesScreen = ({ navigation }) => {
  function renderHeader() {
    return (
      // <View
      //   style={{
      //     height: 50,
      //     // backgroundColor: COLORS.lightRed,
      //     flexDirection: "row",
      //     alignItems: "center",
      //     justifyContent: "space-between",
      //   }}
      // >
      //   <IconButton
      //     icon={icons.back_icon}
      //     onPress={() => navigation.goBack()}
      //     iconStyle={{
      //       tintColor: COLORS.white,
      //     }}
      //     containerStyle={{
      //       // marginVertical: "8%",
      //       // marginHorizontal: "8%",
      //       // position: "absolute",
      //       top: 10,
      //       left: 20,
      //       width: 40,
      //       height: 40,
      //       alignItems: "center",
      //       justifyContent: "center",
      //       borderRadius: 10,
      //       backgroundColor: COLORS.transparentBlack,
      //       borderRadius: SIZES.padding,
      //     }}
      //   />
      //   <Text
      //     style={{
      //       ...FONTS.h4,
      //       paddingTop: SIZES.font,
      //       marginLeft: SIZES.padding,
      //       alignItems: "center",
      //     }}
      //   >
      //     OPPORTUNITIES
      //   </Text>
      //   <View
      //     style={{
      //       marginLeft: "10%",
      //     }}
      //   ></View>
      // </View>
      <HeaderTwo
        icon={icons.back_icon}
        onPress={() => navigation.goBack()}
        heading={"Opportunities"}
        textStyle={{ marginRight: 50 }}
      />
    );
  }

  function renderScholarships() {
    return (
      <View>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.lightGray4,
            marginHorizontal: SIZES.base,
          }}
        >
          Scholarships
        </Text>
        <FlatList
          data={dummyData.scholarships}
          keyExtractor={(item) => `${item.id}`}
          renderItem={(data, rowMap) => (
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(data.item.link);
              }}
            >
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.secondary,
                  paddingVertical: SIZES.base,
                  marginHorizontal: SIZES.base,
                }}
              >
                {data.item.title}
              </Text>
              <LineDivider
                lineStyle={{
                  backgroundColor: COLORS.lightGray3,
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
  function renderInternships() {
    return (
      <View>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.lightGray4,
            marginHorizontal: SIZES.base,
          }}
        >
          Internships
        </Text>
        <FlatList
          data={dummyData.internships}
          keyExtractor={(item) => `${item.id}`}
          renderItem={(data, rowMap) => (
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(data.item.link);
              }}
            >
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.secondary,
                  paddingVertical: SIZES.base,
                  marginHorizontal: SIZES.base,
                }}
              >
                {data.item.title}
              </Text>
              <LineDivider
                lineStyle={{
                  backgroundColor: COLORS.lightGray3,
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
  function renderFellowships() {
    return (
      <View>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.lightGray4,
            marginHorizontal: SIZES.base,
          }}
        >
          Fellowships & Research{" "}
        </Text>
        <FlatList
          data={dummyData.fellowships}
          keyExtractor={(item) => `${item.id}`}
          renderItem={(data, rowMap) => (
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(data.item.link);
              }}
            >
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.secondary,
                  paddingVertical: SIZES.base,
                  marginHorizontal: SIZES.base,
                }}
              >
                {data.item.title}
              </Text>
              <LineDivider
                lineStyle={{
                  backgroundColor: COLORS.lightGray3,
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
  function renderContests() {
    return (
      <View>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.lightGray4,
            marginHorizontal: SIZES.base,
          }}
        >
          Contests
        </Text>
        <FlatList
          data={dummyData.contests}
          keyExtractor={(item) => `${item.id}`}
          renderItem={(data, rowMap) => (
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(data.item.link);
              }}
            >
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.secondary,
                  paddingVertical: SIZES.base,
                  marginHorizontal: SIZES.base,
                }}
              >
                {data.item.title}
              </Text>
              <LineDivider
                lineStyle={{
                  backgroundColor: COLORS.lightGray3,
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
  function renderEntrepreneurships() {
    return (
      <View>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.lightGray4,
            marginHorizontal: SIZES.base,
          }}
        >
          Entrepreneurships
        </Text>
        <FlatList
          data={dummyData.entrepreneurship}
          keyExtractor={(item) => `${item.id}`}
          renderItem={(data, rowMap) => (
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(data.item.link);
              }}
            >
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.secondary,
                  paddingVertical: SIZES.base,
                  marginHorizontal: SIZES.base,
                }}
              >
                {data.item.title}
              </Text>
              <LineDivider
                lineStyle={{
                  backgroundColor: COLORS.lightGray3,
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
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
          {dummyData.Heading2.heading}
        </Text>
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.lightGray4,
          }}
        />
      </View>
      <ScrollView>
        {renderScholarships()}
        {renderInternships()}
        {renderFellowships()}
        {renderContests()}
        {renderEntrepreneurships()}
      </ScrollView>
    </View>
  );
};

export default OpportunitiesScreen;
