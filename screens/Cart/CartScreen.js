import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

import {
  Incrementer,
  CartQuantityBtn,
  IconButton,
  FooterTotal,
  HeaderTwo,
  Header,
} from "../../components";

import { COLORS, FONTS, SIZES, icons, dummyData, books } from "../../constants";
const CartScreen = ({ navigation }) => {
  // Handler
  function updateQtyHandler(newQty, id) {
    const newMyCartList = myCartList.map((cl) =>
      cl.id === id ? { ...cl, qty: newQty } : cl
    );

    setMyCartList(newMyCartList);
  }

  function removeMyCartHandler(id) {
    let newMyCartList = [...myCartList];

    const index = newMyCartList.findIndex((cart) => cart.id === id);

    newMyCartList.splice(index, 1);

    setMyCartList(newMyCartList);
  }

  // Render
  const [qty, setQty] = React.useState(1);
  const [myCartList, setMyCartList] = React.useState(dummyData.myCart);

  function renderHeader() {
    return (
      <Header
        icon={icons.back_icon}
        onPress1={() => navigation.goBack()}
        iconStyle={{
          tintColor: COLORS.white,
          marginLeft: SIZES.radius,
        }}
        heading={"My Cart"}
      >
        <IconButton
          icon={icons.back_arrow_icon}
          onPress={() => navigation.goBack()}
          iconStyle={{
            tintColor: COLORS.primary,
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
          }}
        />
        <Text
          style={{
            ...FONTS.h4,
            paddingTop: SIZES.font,
            marginLeft: SIZES.padding,
            alignItems: "center",
          }}
        >
          MY CART
        </Text>
        <CartQuantityBtn
          containerStyle={{
            marginRight: 10,
            marginTop: 10,
          }}
          iconStyle={{
            tintColor: COLORS.white,
          }}
        />
      </Header>
    );
  }

  function renderCartList() {
    return (
      <SwipeListView
        data={myCartList}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
        }}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(data, rowMap) => (
          <View
            style={{
              height: 100,
              backgroundColor: COLORS.lightGray2,
              flexDirection: "row",
              alignItems: "center",
              marginTop: SIZES.padding,

              paddingHorizontal: SIZES.radius,
              borderRadius: SIZES.radius / 2,
              elevation: 5,
            }}
          >
            {/* Book Image */}
            <View
              style={{
                width: 90,
                height: 100,
                marginLeft: -10,
              }}
            >
              <Image
                source={data.item.image}
                resizeMode="contain"
                style={{
                  width: "70%",
                  height: "70%",
                  position: "absolute",
                  top: 15,
                }}
              />
            </View>
            {/* Book info */}
            <View
              style={{
                flex: 1,
              }}
            >
              <Text style={{ ...FONTS.body3 }}>{data.item.title}</Text>
              <Text style={{ color: COLORS.secondary, ...FONTS.body5 }}>
                UGX{data.item.price}
              </Text>
            </View>

            {/* Quantity */}
            <Incrementer
              containerStyle={{
                height: 50,
                width: 125,
                backgroundColor: COLORS.white,
              }}
              value={data.item.qty}
              onAdd={() => updateQtyHandler(data.item.qty + 1, data.item.id)}
              onMinus={() => {
                if (data.item.qty > 1) {
                  updateQtyHandler(data.item.qty - 1, data.item.id);
                }
              }}
            />
            {/* <IconButton /> */}
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <IconButton
            containerStyle={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: COLORS.secondary,
              flexDirection: "row",
              alignItems: "center",
              marginTop: SIZES.padding,
              paddingHorizontal: SIZES.radius,
              borderRadius: SIZES.radius / 2,
            }}
            icon={icons.delete_icon}
            iconStyle={
              {
                // marginRight: 10,
              }
            }
            onPress={() => removeMyCartHandler(data.item.id)}
          />
        )}
      />
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
      <FooterTotal
        subTotal={50000}
        shippingFee={8000}
        total={58000}
        onPress={() => navigation.navigate("Checkout", { total: 58000 })}
      />
    </View>
  );
};

export default CartScreen;
