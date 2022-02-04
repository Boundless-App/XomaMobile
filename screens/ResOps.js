import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";

import { HeaderTwo } from "../components";
import { icons } from "../constants";

const ResOps = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <HeaderTwo
        icon={icons.back_icon}
        iconStyle={{ marginRight: "35%" }}
        onPress={() => navigation.goBack()}
        heading={"Resources & opportunities"}
        textStyle={{ marginRight: 45 }}
      />
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResOps;
