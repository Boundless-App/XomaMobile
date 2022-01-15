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
          label="Email"
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
          label="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{
            marginTop: SIZES.radius,
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
            marginTop: SIZES.radius,
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
          diabled={isEnableSignIn() ? false : true}
          contentContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn()
              ? COLORS.primary
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
            label="Sign Up?"
            contentContainerStyle={{
              marginLeft: 3,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </View>

      {/* Footer */}
      {/* <View> */}
        {/* Facebook */}
        {/* <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
          }}
          icon={icons.fb}
          iconPosition="LEFT"
          iconStyle={{
            tintColor: COLORS.white,
          }}
          label="Continue with Facebook"
          labelSyle={{
            marginLeft: SIZES.radius,
            color: COLORS.white,
          }}
          onPress={() => console.log("FB")}
        /> */}
        
        {/* Google */}
        {/* <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: "center",
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
          icon={icons.google}
          iconPosition="LEFT"
          iconStyle={{
            tintColor: null,
          }}
          label="Continue with Google"
          labelSyle={{
            marginLeft: SIZES.radius,
          }}
          onPress={() => console.log("Google")}
        /> */}
      {/* </View> */}
    </AuthLayout>
  );
};

export default SignIn;
