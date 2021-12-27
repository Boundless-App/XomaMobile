import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const BookDescriptionScreen = ({ route, navigation }) => {
  const [books, setBook] = React.useState(null);

  React.useEffect(() => {
    let { books } = route.params;
    setBook(books);
  }, [books]);

  function renderHeaderSection() {
    return (
      <SafeAreaView
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "40%",
          overflow: "hidden",
          alignItems: "center",
        }}
      >
        <Image
          source={books.image}
          resizeMode="cover"
          style={{
            height: "100%",
            width: "100%",
            borderBottomLeftRadius: SIZES.radius * 3,
            borderBottomRightRadius: SIZES.radius * 3,
          }}
        />
      </SafeAreaView>
    );
  }

  function renderBookDescription() {
    return (
      <ScrollView
        style={{
          marginTop: "90%",
        }}
      >
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.textGray,
            marginBottom: SIZES.padding,
          }}
        >
          Description
        </Text>
        <Text style={{ ...FONTS.body3, color: COLORS.gray1 }}>
          {books.description}
        </Text>
      </ScrollView>
    );
  }

  function renderBottomButton() {
    return (
      <TouchableOpacity
        style={{
          height: "80%",
          backgroundColor: COLORS.lightRed,
          marginHorizontal: SIZES.radius,
          marginVertical: SIZES.base,
          borderRadius: SIZES.radius,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Cart")}
      >
        <Text style={{ ...FONTS.h3, color: COLORS.white }}>Add To Cart</Text>
      </TouchableOpacity>
    );
  }

  if (books) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentWhite,
        }}
      >
        {/* Header section, with image and price */}
        {renderHeaderSection()}
        {/* Book Desctiption */}
        {renderBookDescription()}
        {/* Add to cart button */}
        <View style={{ height: "10%" }}>{renderBottomButton()}</View>
      </View>
    );
  } else {
    return <></>;
  }
};

export default BookDescriptionScreen;
