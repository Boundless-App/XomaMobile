import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { LineDivider } from "../components";

import { COLORS, books, SIZES, FONTS } from "../constants";

const ShopScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        marginTop: SIZES.padding * 2,
        marginBottom: SIZES.padding,
      }}
      onPress={() =>
        navigation.navigate("BookDescriptionScreen", {
          books: item,
        })
      }
    >
      {/* Image */}
      <View
        style={{
          marginBottom: SIZES.radius,
        }}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 200,
            borderRadius: SIZES.radius,
          }}
        />
      </View>
      <Text style={{ ...FONTS.body3, color: COLORS.textGray }}>
        {item.title}
      </Text>

      <View
        style={{
          marginTop: SIZES.radius,
          flexDirection: "row",
        }}
      >
        {/* Price */}
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.black,
          }}
        >
          UGX {item.price}
        </Text>
      </View>
      <LineDivider />
    </TouchableOpacity>
  );

  function renderBooksList() {
    return (
      <FlatList
        style={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
        data={books.books}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
      />
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray5,
        marginTop: 40,
      }}
    >
      {renderBooksList()}
    </SafeAreaView>
  );
};

export default ShopScreen;