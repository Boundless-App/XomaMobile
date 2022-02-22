import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
        heading={"Checkout"}
        textStyle={{
          marginLeft: "35%",
          //marginHorizontal: SIZES.radius * 4,
        }}
      />
    );
  }

  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [streetAddress, setStreetAddress] = React.useState("");
  const [poBoxAddress, setPoBoxAddress] = React.useState("");
  const [cityAddress, setCityAddress] = React.useState("");

  const [phoneNumberError, setPhoneNumberError] = React.useState("");
  const [streetAddressError, setStreetAddressError] = React.useState("");
  const [poBoxAddressError, setPoBoxAddressError] = React.useState("");
  const [cityAddressError, setCityAddressError] = React.useState("");

  function isEnableCheckout() {
    return (
      phoneNumber == "" &&
      phoneNumberError == "" &&
      streetAddress == "" &&
      streetAddressError == "" &&
      poBoxAddress == "" &&
      poBoxAddressError == "" &&
      cityAddress == "" &&
      cityAddressError == ""
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
          {/* Phone Number */}
          <FormInput
            containerStyle={{
              marginHorizontal: SIZES.radius,
            }}
            placeholder="Phone Number"
            onChange={(value) => {
              //validate Phone
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

          {/* Street Address */}
          <FormInput
            containerStyle={{
              marginHorizontal: SIZES.radius,
            }}
            placeholder="Street Address"
            onChange={(value) => {
              //validate Street Address
              utils.validateAddress(value, setStreetAddressError);

              setStreetAddress(value);
            }}
            errorMsg={streetAddressError}
            appendComponent={
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icons.location}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.primary,
                  }}
                />
              </View>
            }
          />

          {/* P.O Box Number */}
          <FormInput
            containerStyle={{
              marginHorizontal: SIZES.radius,
            }}
            placeholder="P.O Box Number"
            onChange={(value) => {
              setPoBoxAddress(value);
            }}
            appendComponent={
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icons.location}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.primary,
                  }}
                />
              </View>
            }
          />

          {/* City / Town */}
          <FormInput
            containerStyle={{
              marginHorizontal: SIZES.radius,
            }}
            placeholder="City/Town"
            onChange={(value) => {
              //validate Username
              utils.validateAddress(value, setCityAddressError);

              setCityAddress(value);
            }}
            errorMsg={cityAddressError}
            appendComponent={
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icons.location}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.primary,
                  }}
                />
              </View>
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

      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-200}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingBottom: 20,
        }}
      >
        {/* Delivery Form */}
        {renderDeliveryForm()}
      </KeyboardAwareScrollView>

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
          buttonStyle={{
            backgroundColor: COLORS.secondary
          }}
          onPress={() => navigation.replace("Success")}
        />
      </View>
    </View>
  );
};

export default DeliveryInfo;
