import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Header, LineDivider } from "../components";

import { COLORS, books, SIZES, FONTS } from "../constants";

const ShopScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        marginTop: SIZES.padding * 2,
        marginBottom: SIZES.padding,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.padding,
        height: 300,
        width: "100%",
        elevation: 5,
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
          marginBottom: SIZES.base,
        }}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 200,
            borderTopLeftRadius: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
          }}
        />
      </View>
      <Text
        style={{
          ...FONTS.body3,
          color: COLORS.secondary,
          paddingHorizontal: SIZES.base,
        }}
      >
        {item.title}
      </Text>

      <View
        style={{
          marginTop: SIZES.base,
          flexDirection: "row",
        }}
      >
        {/* Price */}
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.textGray,
            paddingHorizontal: SIZES.base,
          }}
        >
          UGX {item.price}
        </Text>
      </View>
      {/* <LineDivider /> */}
    </TouchableOpacity>
  );

  function renderBooksList() {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
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
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        marginTop: 0,
      }}
    >
      <Header
        heading={"Shop"}
        onPress={() => navigation.navigate("Cart")}
        containerStyle={{
          paddingLeft: SIZES.padding2 * 4,
        }}
      />
      {renderBooksList()}
      <View style={{ marginBottom: SIZES.radius * 2 }}></View>
    </View>
  );
};
export default ShopScreen;

// const renderItem = ({ item }) => (
//   <View
//     style={{
//       flexGrow: 4,
//     }}
//   >
//     <TouchableOpacity
//       style={{
//         marginTop: SIZES.padding * 2,
//         marginBottom: SIZES.padding,
//       }}
//       onPress={() =>
//         navigation.navigate("BookDescriptionScreen", {
//           books: item,
//         })
//       }
//     >
//       <View
//         style={{
//           marginBottom: SIZES.radius,
//         }}
//       >
//         <Image
//           source={item.image}
//           resizeMode="cover"
//           style={{
//             width: "50%",
//             height: 150,
//           }}
//         />
//       </View>
//     </TouchableOpacity>
//   </View>
// );

// function renderBooksList() {
//   return (
//     <FlatList
//       style={{
//         paddingHorizontal: SIZES.padding,
//         paddingBottom: 30,
//       }}
//       data={books.books}
//       keyExtractor={(item) => `${item.id}`}
//       renderItem={renderItem}
//     />
//   );
// }

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: COLORS.lightGray5,
//         marginTop: 40,
//       }}
//     >
//       {renderBooksList()}
//       <View style={{ marginBottom: 120 }}></View>
//     </SafeAreaView>
//   );
// };
// export default ShopScreen;
