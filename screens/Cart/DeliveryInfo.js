import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { FooterTotal, HeaderTwo, FormInput } from "../../components";

import { COLORS, FONTS, SIZES, icons, dummyData, books } from "../../constants";
import { utils } from "../../utils";

const DeliveryInfo = ({ navigation }) => {
  function renderHeader() {
    return (
      <HeaderTwo
        icon={icons.back_icon}
        onPress={() => navigation.goBack()}
        iconStyle={{
          tintColor: COLORS.white,
          //marginLeft: SIZES.padding3,
          //marginLeft: "40%",
        }}
        heading={"Step Two"}
        textStyle={{
          marginLeft: "35%",
          //marginHorizontal: SIZES.radius * 4,
        }}
      />
    );
  }

  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [dropDown, setDropDown] = React.useState(false);

  const [addressError, setAddressError] = React.useState("");
  const [phoneNumberError, setPhoneNumberError] = React.useState("");
  //const [showPass, setShowPass] = React.useState(false);

  function isEnableSignUp() {
    return (
      phoneNumber == "" &&
      phoneNumberError == "" &&
      address == "" &&
      addressError == ""
    );
  }

  function renderDeliveryForm() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 3,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            ...FONTS.h2,
            marginHorizontal: SIZES.radius + 5,
            // marginVertical: 20,
          }}
        >
          Please enter your Delivery Information
        </Text>
        <View
          style={{
            //paddingHorizontal: SIZES.radius,
            paddingVertical: 20,
            marginHorizontal: SIZES.radius,
            marginVertical: 10,
            borderRadius: SIZES.radius,
            borderColor: COLORS.secondary,
            borderWidth: 2,
            justifyContent: "space-evenly",
          }}
        >
          <FormInput
            containerStyle={{
              marginHorizontal: SIZES.radius,
            }}
            placeholder="Phone Number"
            onChange={(value) => {
              //validate Username
              utils.validatePhone(value, setPhoneNumberError);

              setPhoneNumber(value);
            }}
            errorMsg={phoneNumberError}
            appendComponent={
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Image
                  source={
                    phoneNumber == "" ||
                    (phoneNumber != "" && phoneNumberError == "")
                      ? icons.correct
                      : icons.cancel
                  }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor:
                      phoneNumber == ""
                        ? COLORS.primary
                        : phoneNumber != "" && phoneNumberError == ""
                        ? COLORS.green
                        : COLORS.red,
                  }}
                />
              </View>
            }
          />
          <FormInput
            containerStyle={{
              marginHorizontal: SIZES.radius,
            }}
            placeholder="Delivery Address"
            onChange={(value) => {
              //validate Username
              //utils.validatePhone(value, setPhoneNumberError);

              setAddress(value);
            }}
            errorMsg={addressError}
            appendComponent={
              <TouchableOpacity
                style={{
                  width: 40,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                onPress={() => setDropDown(!dropDown)}
              >
                <Image
                  source={icons.down_arrow}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.primary,
                  }}
                />
              </TouchableOpacity>
            }
          />
        </View>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        flexDirection: "column",
      }}
    >
      {/* Header */}
      {renderHeader()}

      {/* CartList */}
      {renderDeliveryForm()}

      {/* Footer */}
      <View
        style={{
          marginTop: SIZES.padding3,
        }}
      >
        <FooterTotal
          subTotal={50000}
          shippingFee={8000}
          total={58000}
          // onPress = {
          //     () => navigation.navigate("DeliveryInfo")
          // }
        />
      </View>
    </View>
  );
};

export default DeliveryInfo;
