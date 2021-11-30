import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#4D4D4D",
  secondary: "#80020",

  // colors
  black: "#1E1B26",
  white: "#FFFFFF",
  lightGray: "#64676D",
  lightGray2: "#EFEFF0",
  lightGray3: "#D4D5D6",
  lightGray4: "#7D7E84",
  lightGray5: "#F2F2F2",
  gray: "#2D3038",
  gray1: "#282C35",
  darkRed: "#31262F",
  lightRed: "#C5505E",
  darkBlue: "#22273B",
  lightBlue: "#424BAF",
  darkGreen: "#213432",
  lightGreen: "#31Ad66",
  textGray: "#79758F",

  transparentWhite: "rgba(255, 255, 255, 0.2)",
  transparentBlack: "rgba(0, 0, 0, 0.4)",
  transparent: "transparent",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 36,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: "Roboto-Bold", fontSize: SIZES.h5, lineHeight: 22 },
  body1: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

export const lightTheme = {
  name: "light",
  backgroundColor: COLORS.lightGray5,
  textColor: COLORS.textGray,
  tabBackgroundColor: COLORS.white2,
  cardBackgroundColor: COLORS.white2,
  bottomTabBarBackgroundColor: COLORS.primary,
  headerColor: COLORS.black,
};

export const selectedTheme = lightTheme;

const appTheme = { COLORS, SIZES, FONTS, lightTheme };

export default appTheme;
