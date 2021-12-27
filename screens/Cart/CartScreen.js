import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { books, COLORS, SIZES } from "../../constants";

import { BookCard } from "../../components";

const CartScreen = ({ navigation }) => {
  // function renderItem({ item }) {
  //   return (
  //     <TouchableOpacity
  //       style={{
  //         width: "40%",
  //         height: 200,
  //         backgroundColor: COLORS.white,
  //         marginTop: 35,
  //         marginRight: 10,
  //         borderColor: COLORS.primary,
  //         borderRadius: 10,
  //       }}
  //     >
  //       <View
  //         style={{
  //           width: "50%",
  //           height: 100,
  //         }}
  //       >
  //         <Image
  //           source={item.image}
  //           resizeMode="contain"
  //           style={{
  //             width: "100%",
  //             position: "absolute",
  //             marginLeft: 40,
  //             marginTop: -50,
  //           }}
  //         />
  //       </View>
  //       <View
  //         style={{
  //           marginTop: 10,
  //         }}
  //       >
  //         <Text>{item.title}</Text>
  //         <Text>UGX {item.price}</Text>
  //       </View>
  //     </TouchableOpacity>

  //   );
  // }

  function renderShopItems() {
    return (
      <ScrollView>
        <FlatList
          // style={{}}
          // data={books.books}
          // //horizontal
          // keyExtractor={(item) => `${item.id}`}
          // renderItem={renderItem}
          data={books.books}
          numColumns={2}
          scrollEnabled={false}
          listKey="Books"
          keyExtractor={(item) => `books-${item.id}`}
          contentContainerStyle={{
            marginTop: SIZES.radius,
          }}
          renderItem={({ item, index }) => (
            <BookCard
              book={item}
              contentContainerStyle={{
                height: 130,
                width: (SIZES.width - SIZES.padding * 2 - SIZES.radius) / 2,
                marginTop: SIZES.radius,
                marginLeft: (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding,
              }}
            />
          )}
        />
      </ScrollView>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: 40,
        borderColor: COLORS.textGray,
        backgroundColor: COLORS.lightGray5,
      }}
    >
      {renderShopItems()}

      {/* <Text style={{ color: COLORS.textGray }}>Cart</Text> */}
    </View>
  );
};

export default CartScreen;
