import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
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
      username != "" &&
      password != "" &&
      emailError == "" &&
      passwordError == "" &&
      usernameError == ""
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
      {/* Form input and Sign up*/}
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

        {/* Username */}
        <FormInput
          placeholder="Username"
          containerStyle={{
            marginTop: SIZES.padding,
          }}
          onChange={(value) => {
            setUsername(value);
          }}
          errorMsg={usernameError}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  username == "" || (username != "" && usernameError == "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  width: 20,
                  height: 20,
                  tintColor:
                    username == ""
                      ? COLORS.primary
                      : username != "" && usernameError == ""
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
          containerStyle={{
            marginTop: SIZES.padding,
          }}
          onChange={(value) => {
            utils.validatePassword(value, setPasswordError);
            setPassword(value);
          }}
          errorMsg={passwordError}
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
          label="Sign Up"
          disabled={isEnableSignUp() ? false : true}
          labelStyle={{
              color: COLORS.white
          }}
          contentContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignUp()
              ? COLORS.secondary
              : COLORS.transparentSecondary,
          }}
          onPress={() => navigation.navigate("Home")}
        />

        {/* Sign In Button*/}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
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
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            //onPress={() => navigation.goBack()}
            onPress={() => navigation.navigate("SignIn")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        ></View>
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

export default SignUp;
