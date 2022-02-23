import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import FlashMessage from "react-native-flash-message";
// import { showMessage } from "react-native-flash-message";
import { HeaderTwo, FormInput, TextButton } from "../components";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { utils } from "../utils";

const ChangePassword = ({ navigation }) => {
  function renderHeader() {
    return (
      <HeaderTwo
        icon={icons.back_icon}
        onPress={() => navigation.goBack()}
        iconStyle={{
          tintColor: COLORS.white,
        }}
        heading={"Password"}
        textStyle={{
          marginLeft: "35%",
        }}
      />
    );
  }

  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [showOldPass, setShowOldPass] = React.useState(false);
  const [showNewPass, setShowNewPass] = React.useState(false);
  const [showConfirmPass, setShowConfirmPass] = React.useState(false);

  const [oldPasswordError, setOldPasswordError] = React.useState("");
  const [newPasswordError, setNewPasswordError] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");

  function isEnableConfirm() {
    return (
      oldPassword !== "" &&
      oldPasswordError == "" &&
      newPassword !== "" &&
      newPasswordError == "" &&
      confirmPassword !== "" &&
      confirmPasswordError == ""
    );
  }
  function renderChangePasswordForm() {
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
          }}
        >
          Please create a password of your choice
        </Text>
        <View
          style={{
            paddingVertical: 20,
            marginHorizontal: SIZES.radius,
            marginVertical: 10,
            borderRadius: SIZES.radius,
            borderColor: COLORS.secondary,
            borderWidth: 2,
            justifyContent: "space-evenly",
          }}
        >
          {/* Old Password */}
          <FormInput
            containerStyle={{
              marginHorizontal: SIZES.radius,
            }}
            placeholder="Old password"
            secureTextEntry={!showOldPass}
            autoCompleteType="password"
            onChange={(value) => {
              utils.validatePassword(value, setOldPasswordError);
              setOldPassword(value);
            }}
            errorMsg={oldPasswordError}
            appendComponent={
              <TouchableOpacity
                style={{
                  width: 40,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                onPress={() => setShowOldPass(!showOldPass)}
              >
                <Image
                  source={showOldPass ? icons.eye_close : icons.eye}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.primary,
                  }}
                />
              </TouchableOpacity>
            }
          />

          {/* New Password */}
          <FormInput
            containerStyle={{
              marginHorizontal: SIZES.radius,
            }}
            placeholder="New password"
            secureTextEntry={!showNewPass}
            autoCompleteType="password"
            onChange={(value) => {
              utils.validatePassword(value, setNewPasswordError);
              setNewPassword(value);
            }}
            errorMsg={newPasswordError}
            appendComponent={
              <TouchableOpacity
                style={{
                  width: 40,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                onPress={() => setShowNewPass(!showNewPass)}
              >
                <Image
                  source={showNewPass ? icons.eye_close : icons.eye}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.primary,
                  }}
                />
              </TouchableOpacity>
            }
          />

          {/* Confirm Password */}
          <FormInput
            containerStyle={{
              marginHorizontal: SIZES.radius,
            }}
            placeholder="Confirm New Password"
            secureTextEntry={!showConfirmPass}
            autoCompleteType="password"
            onChange={(value) => {
              utils.validatePassword(value, setConfirmPasswordError);
              setConfirmPassword(value);
            }}
            errorMsg={confirmPasswordError}
            appendComponent={
              <TouchableOpacity
                style={{
                  width: 40,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                onPress={() => setShowConfirmPass(!showConfirmPass)}
              >
                <Image
                  source={showConfirmPass ? icons.eye_close : icons.eye}
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

  function renderConfirmButton() {
    return (
      <TextButton
        label="Confirm"
        disabled={isEnableConfirm() ? false : true}
        labelStyle={{
          color: COLORS.white,
        }}
        contentContainerStyle={{
          height: 60,
          marginBottom: SIZES.padding,
          marginHorizontal: SIZES.padding2,
          borderRadius: SIZES.radius,
          alignItems: "center",
          backgroundColor: isEnableConfirm()
            ? COLORS.secondary
            : COLORS.transparentSecondary,
        }}
        // onPress={showMessage({
        //   message: "Password has been changed successfully.",
        //   type: "success",
        // })}
      />
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
        {renderChangePasswordForm()}
      </KeyboardAwareScrollView>
          {/* < FlashMessage position="top" /> */}
          
      {renderConfirmButton()}
    </View>
  );
};

export default ChangePassword;
