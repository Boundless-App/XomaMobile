import { View, Text } from "react-native";
import React from "react";
import { icons } from "../constants";
import { HeaderTwo } from "../components";

const Notifications = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <HeaderTwo
        icon={icons.back_icon}
        onPress={() => navigation.goBack()}
        heading={"Notifications"}
        textStyle={{ marginRight: 50 }}
      />
      <Text>Notifications</Text>
    </View>
  );
};

export default Notifications;
