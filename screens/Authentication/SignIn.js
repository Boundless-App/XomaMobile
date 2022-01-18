import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { AuthLayout } from "../";
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
} from "../../components";

import { COLORS, FONTS, icons, images, SIZES } from "../../constants";

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
        {/* Form Input */}
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

        <FormInput
          placeholder="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{
            //marginTop: SIZES.padding,
          }}
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

        {/* Sign In */}
        <TextButton
          label="Sign In"
          labelStyle={{
            color: COLORS.white
        }}
        onPress={() => navigation.navigate("Home")}
          diabled={isEnableSignIn() ? false : true}
          contentContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn()
              ? COLORS.secondary
              : COLORS.transparentSecondary,
          }}
        />
        {/* Sign Up */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
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
      </View>

    </AuthLayout>
  );
};

export default SignIn;
