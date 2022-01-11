import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { Notification, IconButton } from "../components";

const BookDescriptionScreen = ({ route, navigation }) => {
  const [isActive, setIsActive] = React.useState(false);

  const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] =
    React.useState(0);

  const indicator = new Animated.Value(0);

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
            borderBottomLeftRadius: SIZES.radius * 2,
            borderBottomRightRadius: SIZES.radius * 2,
          }}
        />
        <IconButton
          icon={icons.back_icon}
          onPress={() => navigation.goBack()}
          iconStyle={{
            tintColor: COLORS.white,
          }}
          containerStyle={{
            position: "absolute",
            top: 40,
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
      </SafeAreaView>
    );
  }

  function renderBookDescription() {
    const indicatorSize =
      scrollViewWholeHeight > scrollViewVisibleHeight
        ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
          scrollViewWholeHeight
        : scrollViewVisibleHeight;

    const difference =
      scrollViewVisibleHeight > indicatorSize
        ? scrollViewVisibleHeight - indicatorSize
        : 1;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          padding: SIZES.padding,
        }}
      >
        {/* Custom scrollbar */}
        <View
          style={{
            marginTop: "90%",
            width: 4,
            height: "50%",
          }}
        >
          <Animated.View
            style={{
              width: 4,
              height: indicatorSize,
              backgroundColor: COLORS.secondary,
              transform: [
                {
                  translateY: Animated.multiply(
                    indicator,
                    scrollViewVisibleHeight / scrollViewWholeHeight
                  ).interpolate({
                    inputRange: [0, difference],
                    outputRange: [0, difference],
                    extrapolate: "clap",
                  }),
                },
              ],
            }}
          />
        </View>

        <ScrollView
          style={{
            marginTop: "90%",
            paddingLeft: SIZES.padding2,
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onContentSizeChange={(width, height) => {
            setScrollViewWholeHeight(height);
          }}
          onLayout={({
            nativeEvent: {
              layout: { x, y, width, height },
            },
          }) => {
            setScrollViewVisibleHeight(height);
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: indicator } } }],
            { useNativeDriver: false }
          )}
        >
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.primary,
              marginBottom: SIZES.padding,
            }}
          >
            Description
          </Text>
          <Text style={{ ...FONTS.body3, color: COLORS.primary }}>
            {books.description}
          </Text>
        </ScrollView>
      </View>
    );
  }

  function renderBottomButton() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <IconButton
          icon={icons.cart_icon}
          iconStyle={{
            tintColor: COLORS.primary,
          }}
          onPress={() => navigation.navigate("Cart")}
          containerStyle={{
            justifyContent: "center",
            marginHorizontal: "5%",
          }}
        />
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: COLORS.secondary,
            marginHorizontal: SIZES.base,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
          }}
          // onPress={() => navigation.navigate("Cart")}
          onPress={() => setIsActive(!isActive)}
        >
          <Text style={{ ...FONTS.h3, color: COLORS.white }}>Add To Cart</Text>
          <Notification isActive={isActive} />
        </TouchableOpacity>
      </View>
    );
  }

  if (books) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightTextGray,
        }}
      >
        {/* Header section, with image and price */}
        {renderHeaderSection()}

        {/* Book Desctiption */}
        {renderBookDescription()}

        {/* Add to cart button */}
        <View style={{ height: "10%", marginBottom: "1%" }}>
          {renderBottomButton()}
        </View>
      </View>
    );
  } else {
    return <></>;
  }
};

export default BookDescriptionScreen;
