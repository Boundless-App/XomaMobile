import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking
} from "react-native";

import { AuthLayout } from "../";
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
} from "../../components";

import { COLORS, FONTS, icons, images, SIZES, jsonData } from "../../constants";

import { utils } from "../../utils";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const [showPass, setShowPass] = React.useState(false);

  const [saveMe, setSaveMe] = React.useState(false);

  function isEnableSignIn() {
    return email != "" && emailError == "";
  }

  return (
    <AuthLayout
      title="Let's Sign You In"
      subtitle="Welcome back, you've been missed"
    >
      {/* Header */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >

        {/* Form Input - email */}
        <FormInput
          containerStyle={{
            marginTop: SIZES.base,
          }}
          icons={icons.email}
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

        {/* Form Input - Password */}

        <FormInput
          placeholder="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          onChange={(value) => setPassword(value)}
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

        {/* Save me & Forgot password */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.base,
            justifyContent: "space-between",
          }}
        >
          {/* Switch Save me */}
          <CustomSwitch value={saveMe} onChange={(value) => setSaveMe(value)} />

          {/* Forgot Password */}
          <TextButton
            label="Forgot password?"
            contentContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.body4,
            }}
            onPress={() => navigation.navigate("ForgotPassword")}
          />
        </View>

        {/* Sign In Button */}
        <TextButton
          label="Sign In"
          disabled={isEnableSignIn() ? false : true}
          labelStyle={{
            color: COLORS.white,
          }}
          contentContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding3,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn()
              ? COLORS.secondary
              : COLORS.transparentSecondary,
          }}
          onPress={() => navigation.navigate("Home")}
        />
        {/* Sign Up Text Button*/}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding3,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.body3,
            }}
          >
            Don't have an account?
          </Text>

          <TextButton
            label="Sign Up"
            contentContainerStyle={{
              marginLeft: 3,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.secondary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.navigate("SignUp")}
          />
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
            <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
              @2022{" "}
            </Text>
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
      </View>
    </AuthLayout>
  );
};

export default SignIn;
