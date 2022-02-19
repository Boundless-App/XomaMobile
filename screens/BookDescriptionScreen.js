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

import { connect } from "react-redux";
import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";
import { COLORS, dummyData, FONTS, icons, SIZES, books } from "../constants";
import {
  CartQuantityBtn,
  IconButton,
  VerticalLineDivider,
} from "../components";

const BookDescriptionScreen = ({ route, navigation }) => {
  // const [cart, setCart] = React.useState();

  // React.useEffect(() => {
  //   commerce.cart.retrieve().then((res) => {
  //     setCart(res);
  //   });
  // }, []);
  // const addToCart = (id, title) => {};

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
      <View
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
            borderBottomLeftRadius: SIZES.radius,
            borderBottomRightRadius: SIZES.radius,
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
            top: 10,
            left: 20,
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            backgroundColor: COLORS.transparentBlack,
            borderRadius: SIZES.padding,
          }}
        />

        < CartQuantityBtn
        // quantity={0}
        onPress = {
          () => navigation.navigate("Cart")
        }
        containerStyle = {
          {
            position: "absolute",
              top: 10,
              right: 20,
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              backgroundColor: COLORS.transparentBlack,
              borderRadius: SIZES.padding,
          }
        }
        iconStyle = {
          {
            tintColor: COLORS.white,
          }
        }
        />
      </View>
    );
  }

  function renderBookTitlePrice() {
    return (
      <View
        style={{
          flex: 1,
          position: "absolute",
          top: "30%",
          left: "0%",
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 8,
            marginHorizontal: 10,
            backgroundColor: COLORS.transparentBlack,
            borderRadius: SIZES.radius,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <View
              style={{
                marginTop: 8,
              }}
            ></View>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.white,
              }}
            >
              {books.title}
            </Text>
          </View>
          <VerticalLineDivider />
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white,
              }}
            >
              UGX
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white,
              }}
            >
              {books.price}
            </Text>
          </View>
        </View>
      </View>
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
        {/* <CartQuantityBtn
          // quantity={0}
          onPress={() => navigation.navigate("Cart")}
          containerStyle={{
            alignSelf: "center",
            backgroundColor: COLORS.lightTextGray,
            marginHorizontal: "5%",
          }}
          iconStyle={{
            tintColor: COLORS.primary,
          }}
        /> */}
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
          onPress={() => {
            showMessage({
              message: "Item added to cart",
              type: "success",
            });
            {
              books.id;
            }
          }}
        >
          <Text style={{ ...FONTS.h3, color: COLORS.white }}>Add To Cart</Text>
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
        {/* Book Title and Price */}
        {renderBookTitlePrice()}
        {/* Book Desctiption */}

        {renderBookDescription()}

        {/* Add to cart button */}
        <View style={{ height: "10%", marginBottom: "1%" }}>
          {renderBottomButton()}
        </View>
        <FlashMessage position="top" />
      </View>
    );
  } else {
    return <></>;
  }
};

const mapStateToProps = (state) => {
  return {
    cartItems: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (id) => dispatch({ type: "ADD_TO_CART", payload: id }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDescriptionScreen);
