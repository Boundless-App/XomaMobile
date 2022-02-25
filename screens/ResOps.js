import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import React from "react";

import { HeaderTwo } from "../components";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";

const ResOps = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <HeaderTwo
        icon={icons.back_icon}
        iconStyle={{ marginRight: "5%" }}
        onPress={() => navigation.goBack()}
        heading={"Insights"}
        textStyle={{ marginRight: 30 }}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: "10%",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Resources")}
          style={{
            height: "30%",
            width: "90%",
            elevation: 1,
          }}
        >
          <View style={{}}>
            <Image
              source={images.bookLover}
              resizeMode="cover"
              style={{
                height: "85%",
                width: "100%",
              }}
            />
          </View>
          <View>
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              Resources
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Resources")}
          style={{
            height: "30%",
            width: "90%",
            elevation: 1,
          }}
        >
          <View style={{}}>
            <Image
              source={images.knowledge}
              resizeMode="cover"
              style={{
                height: "85%",
                width: "100%",
              }}
            />
          </View>
          <View>
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              Opportunities
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => navigation.navigate("Opportunities")}
          style={{
            height: "30%",
            width: "90%",
            elevation: 1,
          }}
        >
          <View style={{}}>
            <Image
              source={images.exploring_nature}
              resizeMode="cover"
              style={{
                height: "85%",
                width: "100%",
              }}
            />
          </View>
          <View>
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              Workshops
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResOps;
