import React from "react";
import { View, Text, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const CarouselItem = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        width: width - 20,
        height: height / 4,
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
      }}
    >
      <Image
        style={{
          width: width - 20,
          height: height / 4,
          borderRadius: 10,
        }}
        source={item.image}
      />
      <View
        style={{
          position: "absolute",
          bottom: 10,
          margin: 10,
          left: 5,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 22,
            shadowColor: "#000",
            shadowOffset: { width: 0.8, height: 0.8 },
            shadowOpacity: 1,
            shadowRadius: 3,
            marginBottom: 5,
            fontWeight: "bold",
            elevation: 5,
          }}
        >
          Title
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            shadowColor: "#000",
            shadowOffset: { width: 0.8, height: 0.8 },
            shadowOpacity: 1,
            shadowRadius: 3,
            elevation: 5,
          }}
        >
          Description
        </Text>
      </View>
    </View>
  );
};

export default CarouselItem;
