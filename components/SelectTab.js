// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";

// import { COLORS, FONTS } from "../constants";

// const SelectTabButton = ({ containerStyle, label, selected, onPress }) => {
//   return (
//     <TouchableOpacity
//       style={{
//         alignItems: "center",
//         ...containerStyle,
//       }}
//       onPress={onPress}
//     >
//       <Text
//         style={{
//           color: selected ? COLORS.lightRed : COLORS.textGray,
//           ...FONTS.body2,
//           fontSize: 18,
//         }}
//       >
//         {label}
//       </Text>

//       <View
//         style={{
//           marginTop: selected ? 3 : 4,
//           height: selected ? 4 : 2,
//           width: "100%",
//           backgroundColor: selected ? COLORS.lightRed : COLORS.textGray,
//         }}
//       ></View>
//     </TouchableOpacity>
//   );
// };

// export default SelectTabButton;

import React from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";

import { COLORS, constants, FONTS, SIZES } from "../constants";

const course_details_tabs = constants.course_details_tabs.map(
  (course_details_tab) => ({
    ...course_details_tab,
    ref: React.createRef,
  })
);

const TabIndicator = ({ measureLayout, scrollX }) => {
  const inputRange = course_details_tabs.map((_, i) => i * SIZES.width);

  const tabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((measure) => measure.width),
  });

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((measure) => measure.x),
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        bottom: 0,
        height: 4,
        width: tabIndicatorWidth,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.secondary,
        transform: [
          {
            translateX,
          },
        ],
      }}
    />
  );
};

const SelectTab = ({ scrollX, onTabPress }) => {
  const [measureLayout, setMeasureLayout] = React.useState([]);
  const containerRef = React.useRef();

  React.useEffect(() => {
    let ml = [];

    course_details_tabs.forEach((course_details_tab) => {
      course_details_tab?.ref?.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          ml.push({
            x,
            y,
            width,
            height,
          });
          if (ml.length === course_details_tabs.length) {
            setMeasureLayout(ml);
          }
        }
      );
    });
  }, [containerRef.current]);
  return (
    <View
      ref={containerRef}
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      {/* Tab indicator */}
      {measureLayout.length > 0 && (
        <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
      )}
      {/* Tabs */}
      {course_details_tabs.map((item, index) => {
        return (
          <TouchableOpacity
            key={`Tab-${index}`}
            ref={item.ref}
            style={{
              flex: 1,
              paddingHorizontal: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              onTabPress(index);
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
                fontSize: SIZES.height > 800 ? 18 : 17,
              }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SelectTab;
