import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { AuthLayout } from "..";
import { FormInput, TextIconButton, TextButton } from "../../components";
import { FONTS, COLORS, SIZES, icons } from "../../constants";
import { utils } from "../../utils";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);

  const [emailError, setEmailError] = React.useState("");
  const [usernameError, setUsernameError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  function isEnableSignUp() {
    return (
      email != "" &&
      password != "" &&
      emailError == "" &&
      passwordError == ""
    );
  }

  return (
    <AuthLayout
      title="Getting started"
      subtitle="Create an account to continue!"
      titleContainerStyle={{
        marginTop: SIZES.radius,
      }}
    >
      {/* Form input*/}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
        }}
      >

        {/* Email */}
        <FormInput
          placeholder="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={(value) => {
            //validate email
            utils.validateEmail(value, setEmailError);

            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  email == "" || (email != "" && emailError == "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email == ""
                      ? COLORS.primary
                      : email != "" && emailError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        {/* Password */}
        <FormInput
          placeholder="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          onChange={(value) => {
            //utils.validatePassword(value, setPasswordError);
            setPassword(value);
          }}
          //errorMsg={passwordError}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              onPress={() => setShowPass(!showPass)}
            >
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.primary,
                }}
              />
            </TouchableOpacity>
          }
        />

        <FormInput
          placeholder="Confirm Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          onChange={(value) => {
            //utils.validatePassword(value, setPasswordError);
            setPassword(value);
          }}
          //errorMsg={passwordError}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              onPress={() => setShowPass(!showPass)}
            >
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.primary,
                }}
              />
            </TouchableOpacity>
          }
        />

        {/* Sign Up and Sign In */}

        {/* Sign Up Button */}
        <TextButton
          label="Create Account"
          disabled={isEnableSignUp() ? false : true}
          labelStyle={{
            color: COLORS.white,
          }}
          contentContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding3,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignUp()
              ? COLORS.secondary
              : COLORS.transparentSecondary,
          }}
          onPress={() => navigation.navigate("Continue")}
        />

        {/* Sign In Button*/}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding3,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
            Already have an account?{" "}
          </Text>
          <TextButton
            label="Sign In"
            contentContainerStyle={{
              marginLeft: 3,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.secondary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.navigate("SignIn")}
          />
        </View>
      </View>

      {/* Footer */}
      <View
        style={{
          flexDirection: "column",
          marginTop: SIZES.padding3,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>@2022 </Text>
          <TextButton
            label="Boundless Minds Limited."
            contentContainerStyle={{
              marginLeft: 3,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.secondary,
              ...FONTS.h3,
            }}
            onPress = {
              () => {
                Linking.openURL("https://boundless-minds.org/");
              }
            }
          />
        </View>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.body3,
              textAlign: "center",
            }}
          >
            {" "}
            All Rights Reserved.
          </Text>
        </View>
      </View>
    </AuthLayout>
  );
};

export default SignUp;
