function isValidEmail(value) {
    const email_val = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_val.test(String(value).toLowerCase());
}

function isValidPass(value) {
    const password_val = /^[0-9a-zA-Z]+$/;
}

function validateEmail(value, setEmailError) {
    if (value == "") {
        setEmailError("")
    }
    else if (isValidEmail(value)) {
        setEmailError("")
    }
    else {
        setEmailError("Invalid Email")
    }
}

function validatePassword(value, setPasswordError) {
    if (value.length < 9) {
        setPasswordError("Password must be 9 characters")
    } else {
        setPasswordError("")
    }
}

function validateUsername(value, setUsernameError) {
    if (value.length < 9) {
        setUsernameError("Username must be 9 characters")
    } else {
        setUsernameError("")
    }
}

function validatePhone(value, setPhoneError) {
    if (value.length < 12) {
        setPhoneError("Phone number must be 12 characters")
    } else {
        setPhoneError("")
    }
}

const utils = {
    isValidEmail,
    validateEmail,
    validatePassword,
    validateUsername,
    validatePhone
};

export default utils;