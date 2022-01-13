import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, dummyData2, FONTS, icons, SIZES } from "../../constants";

const CourseContent = () => {
  function renderContent() {
    return (
      <View>
        {dummyData2?.courses_details?.content.map((item, index) => {
          return (
            <View
              key={`Content-${index}`}
              style={{
                flexDirection: "row",
                paddingHorizontal: SIZES.radius,
                alignItems: "center",
                height: 70,
                paddingTop: SIZES.radius,
              }}
            >
              {/* Icon */}
              <View
                style={{
                  backgroundColor: COLORS.lightGray3,
                  width: 60,
                  height: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: SIZES.radius,
                }}
              >
                <Image
                  source={icons.alignLeft_icon2}
                  style={{
                    resizeMode: "contain",
                    width: 20,
                    height: 20,
                    padding: SIZES.padding,
                  }}
                />
              </View>
              {/* Topic */}
              <View
                style={{
                  flex: 1,
                  marginLeft: SIZES.radius,
                }}
              >
                <Text style={{ ...FONTS.body4 }}>{item?.topic}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  return <View>{renderContent()}</View>;
};

export default CourseContent;
