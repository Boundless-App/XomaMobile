import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#4D4D4D",
  secondary: "#800020",

  // colors
  black: "#000000",
  black2: "#1E1B26",
  white: "#FFFFFF",
  white2: "F8F8F8",
  lightGray: "#F2F2F2",
  lightGray2: "#EFEFF0",
  lightGray3: "#D4D5D6",
  lightGray4: "#7D7E84",
  lightGray5: "#F2F2F2",
  gray: "#2D3038",
  gray1: "#282C35",
  darkRed: "#31262F",
  lightRed: "#C5505E",
  darkBlue: "#25282F",
  lightBlue: "#424BAF",
  darkGreen: "#213432",
  lightGreen: "#31Ad66",
  caribbeanGreen: "#11C39C",
  textGray: "#79758F",
  lightTextGray: "#E3E3E3",
  orange: "#F96D41",

  transparentWhite: "rgba(255, 255, 255, 0.2)",
  transparentBlack: "rgba(0, 0, 0, 0.4)",
  transparent: "transparent",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: { fontFamily: "Lato-Black", fontSize: SIZES.largeTitle },
  h1: { fontFamily: "Lato-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Lato-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Lato-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Lato-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: "Lato-Regular", fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: "Lato-Regular", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "Lato-Regular", fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: "Lato-Regular", fontSize: SIZES.body4, lineHeight: 22 },
  body5: { fontFamily: "Lato-Regular", fontSize: SIZES.body5, lineHeight: 22 },
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
