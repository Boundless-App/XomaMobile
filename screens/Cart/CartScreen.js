import React from "react";
import { View, Text, Image } from "react-native";
import { Incrementer, CartQuantityBtn, IconButton } from "../../components";

import { COLORS, FONTS, SIZES, icons, books } from "../../constants";
const CartScreen = ({ navigation }) => {
  const [qty, setQty] = React.useState(1);
  const [myCartList, setMyCartList] = React.useState(books);

  function renderHeader() {
    return (
      <View
        style={{
          height: 50,
          // backgroundColor: COLORS.lightRed,
          flexDirection: "row",
          justifyContent: "space-between",
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
            top: 10,
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
        <Text
          style={{
            ...FONTS.h4,
            paddingTop: SIZES.padding2,
          }}
        >
          MY CART
        </Text>
        <CartQuantityBtn
          // quantity={2}
          containerStyle={{
            marginRight: 20,
            marginTop: 10,
          }}
        />
      </View>
    );
  }

  function renderCartList() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          height: 100,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        <Text>{books.title}</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {/* CartList */}
      {renderCartList()}

      {/* Footer */}
    </View>
  );
};

export default CartScreen;
{
  /* <Incrementer
        value={qty}
        onAdd={() => setQty(qty + 1)}
        onMinus={() => {
          if (qty > 1) {
            setQty(qty - 1);
          }
        }}
      /> */
}
