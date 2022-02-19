import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { AuthLayout } from "..";
import { FormInput, TextIconButton, TextButton } from "../../components";
import { FONTS, COLORS, SIZES, icons } from "../../constants";
import { utils } from "../../utils";

const ContinueScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  //const [password, setPassword] = React.useState("");
  const [dropDown, setDropDown] = React.useState(false);

  const [emailError, setEmailError] = React.useState("");
  const [usernameError, setUsernameError] = React.useState("");
  //const [passwordError, setPasswordError] = React.useState("");

  function isEnableSignUp() {
    return (
      username != "" &&
      password != "" &&
      email != "" &&
      emailError == "" &&
      passwordError == "" &&
      usernameError == ""
    );
  }

  return (
    <AuthLayout
      title="Welcome:"
      subtitle="Let's get to know you alittle more"
      authContainer={{
        paddingTop: SIZES.padding3 * 2,
        paddingBottom: SIZES.base
      }}
      titleContainerStyle={{
        marginTop: SIZES.base,
      }}
    >
      {/* Form input under continue*/}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
        }}
      >
        {/* Username */}
        <FormInput
          placeholder="Your full name"
          //keyboardType="email-address"
          //autoCompleteType="email"
          onChange={(value) => {
            //validate email
            // utils.validateEmail(value, setEmailError);

            setUsername(value);
          }}
          //errorMsg={emailError}
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
                  height: 20,
                  width: 20,
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

{/* Gender & Age */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around"
          }}
        >
          <View
          style={{
            width: "50%",
            paddingRight: SIZES.base
          }}
          >
            {/* Gender */}
          <FormInput
            placeholder="Gender"
            // secureTextEntry={!showPass}
            autoCompleteType="password"
            // containerStyle={{
            //   marginTop: SIZES.base,
            // }}
            // onChange={(value) => {
            //   // utils.validatePassword(value, setPasswordError);
            //   setPassword(value);
            // }}
            // errorMsg={passwordError}
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

          <View
          style={{
            width: "50%",
            paddingLeft: SIZES.base
          }}
          >
          <FormInput
            placeholder="How old are you?"
            // secureTextEntry={!showPass}
            // autoCompleteType="password"
            // containerStyle={{
            //   marginTop: SIZES.padding,
            // }}
            // onChange={(value) => {
            //   utils.validatePassword(value, setPasswordError);
            //   setPassword(value);
            // }}
            //errorMsg={passwordError}
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

{/* Country & Location */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around"
          }}
        >
          <View
          style={{
            width: "50%",
            paddingRight: SIZES.base
          }}
          >
            {/* Gender */}
          <FormInput
            placeholder="Country"
            // secureTextEntry={!showPass}
            autoCompleteType="password"
            // containerStyle={{
            //   marginTop: SIZES.base,
            // }}
            // onChange={(value) => {
            //   // utils.validatePassword(value, setPasswordError);
            //   setPassword(value);
            // }}
            // errorMsg={passwordError}
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

          <View
          style={{
            width: "50%",
            paddingLeft: SIZES.base
          }}
          >
          <FormInput
            placeholder="Location"
            // secureTextEntry={!showPass}
            // autoCompleteType="password"
            // containerStyle={{
            //   marginTop: SIZES.padding,
            // }}
            // onChange={(value) => {
            //   utils.validatePassword(value, setPasswordError);
            //   setPassword(value);
            // }}
            //errorMsg={passwordError}
          />
          </View>
        </View>

{/* Level of Education */}
<FormInput
          placeholder="Maximum Level of Education"
          //keyboardType="email-address"
          //autoCompleteType="email"
          onChange={(value) => {
            //validate email
            // utils.validateEmail(value, setEmailError);

            setUsername(value);
          }}
          //errorMsg={emailError}
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

        {/* Sign Up and Sign In */}
        {/* Sign Up Button */}
        <TextButton
          label="Update Profile"
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
          onPress={() => navigation.navigate("Home")}
        />
      </View>

      {/* Footer */}
      <View
        style={{
          flexDirection: "column",
          marginTop: SIZES.padding3 * 2,
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

export default ContinueScreen;
