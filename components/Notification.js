import React from "react";
import { View, Text, Animated } from "react-native";

const Notification = (props) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  if (props.isActive) {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  } else {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  return (
    <View
      style={{
        position: "absolute",
        top: 50,
        right: 10,
      }}
    >
      <Animated.View
        style={{
          backgroundColor: "#23d160",
          borderRadius: 5,
          padding: 4,
          flexDirection: "row",
          transform: [
            {
              translateX: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [350, 0],
              }),
            },
            { perspective: 1000 },
          ],
        }}
      >
        <Text
          style={{
            color: "#fff",
            padding: 10,
            textAlign: "left",
            justifyContent: "center",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Book added to cart
        </Text>
      </Animated.View>
    </View>
  );
};

export default Notification;
