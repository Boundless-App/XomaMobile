import React from "react";
import {
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  Linking,
} from "react-native";

import { HorizontalCourseCard, IconButton } from "../components";
import { COLORS, FONTS, SIZES, icons } from "../constants";

const ResourcesScreen = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
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
            top: 20,
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
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightBlue,
      }}
    >
      {renderHeader()}
    </View>
  );
};

export default ResourcesScreen;
