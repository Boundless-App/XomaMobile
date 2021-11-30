import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { COLORS, SIZES } from "../constants";

const BookDescriptionScreen = ({ route, navigation }) => {
  const [books, setBook] = React.useState(null);

  React.useEffect(() => {
    let { books } = route.params;
    setBook(books);
  }, [books]);

  function renderBookInfo() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={books.image}
          resizeMode="cover"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />

        {/* Color Overlay */}
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: COLORS.transparentWhite,
          }}
        ></View>

        {/* Navigation */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.radius,
            height: 80,
            alignItems: "flex-end",
          }}
        ></View>
      </View>
    );
  }

  if (books) {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
        {/* Book Spotlight */}
        <View
          style={{
            flex: 4,
          }}
        >
          {renderBookInfo()}
        </View>
        {/* Book Description */}
        <View style={{ flex: 2 }}></View>
        {/* Button */}
        <View style={{ height: 70 }}></View>
      </View>
    );
  } else {
    return <></>;
  }
};

export default BookDescriptionScreen;
