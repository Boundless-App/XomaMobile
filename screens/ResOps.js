import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import React from "react";

import { HeaderTwo } from "../components";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";

const ResOps = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <HeaderTwo
        icon={icons.back_icon}
        iconStyle={{ marginRight: "5%" }}
        onPress={() => navigation.goBack()}
        heading={"Insights"}
        textStyle={{ marginRight: 30 }}
      />
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Resources")}
          style={{
            flexDirection: "row",
            borderRadius: SIZES.base,
            backgroundColor: COLORS.white,
            //elevation: 2,
          }}
        >
          {/* Thumbnail */}
          <View
            style={
              {
                //backgroundColor: COLORS.black
              }
            }
          >
            <Image
              source={images.bookLover}
              resizeMode="cover"
              style={{
                width: 110,
                height: 130,
                borderRadius: 20,
              }}
            />
          </View>
          {/* Details */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              marginLeft: SIZES.base,
              //backgroundColor: COLORS.black,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                height: 52,
                //backgroundColor: COLORS.white
              }}
            >
              {/* Title */}
              <Text
                style={{
                  ...FONTS.h4,
                  fontSize: 17,
                  marginTop: SIZES.base,
                  color: COLORS.primary,
                }}
              >
                Resources
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Opportunities")}
          style={{
            flexDirection: "row",
            borderRadius: SIZES.base,
            backgroundColor: COLORS.white,
            //elevation: 2,
          }}
        >
          {/* Thumbnail */}
          <View
            style={
              {
                //backgroundColor: COLORS.black
              }
            }
          >
            <Image
              source={images.bookLover}
              resizeMode="cover"
              style={{
                width: 110,
                height: 130,
                borderRadius: 20,
              }}
            />
          </View>
          {/* Details */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              marginLeft: SIZES.base,
              //backgroundColor: COLORS.black,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                height: 52,
                //backgroundColor: COLORS.white
              }}
            >
              {/* Title */}
              <Text
                style={{
                  ...FONTS.h4,
                  fontSize: 17,
                  marginTop: SIZES.base,
                  color: COLORS.primary,
                }}
              >
                Opportunities
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Coming Soon")}
          style={{
            flexDirection: "row",
            borderRadius: SIZES.base,
            backgroundColor: COLORS.white,
            //elevation: 2,
          }}
        >
          {/* Thumbnail */}
          <View
            style={
              {
                //backgroundColor: COLORS.black
              }
            }
          >
            <Image
              source={images.bookLover}
              resizeMode="cover"
              style={{
                width: 110,
                height: 130,
                borderRadius: 20,
              }}
            />
          </View>
          {/* Details */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              marginLeft: SIZES.base,
              //backgroundColor: COLORS.black,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                height: 52,
                //backgroundColor: COLORS.white
              }}
            >
              {/* Title */}
              <Text
                style={{
                  ...FONTS.h4,
                  fontSize: 17,
                  marginTop: SIZES.base,
                  color: COLORS.primary,
                }}
              >
                Workshops
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={{
            marginVertical: 50,
          }}
          onPress={() => navigation.navigate("Resources")}
        >
          <Text>Resources</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: 50,
          }}
          onPress={() => navigation.navigate("Opportunities")}
        >
          <Text>Opportunities</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: 50,
          }}
          onPress={() => console.log("Coming Soon")}
        >
          <Text>Workshops</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default ResOps;
