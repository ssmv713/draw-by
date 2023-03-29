import { TypographyOptions } from "@mui/material/styles/createTypography";
import { lightTheme } from "./customTheme";

export const baseTypographyOptions: TypographyOptions = {
  fontFamily: "Pretendard-Regular",

  allVariants: {
    whiteSpace: "pre-wrap",
  },
  h1: {
    fontSize: "40px", //160
    fontWeight: 700,
    "@media (max-width:376px)": {
      fontSize: "32px ",
    },
  },
  h2: {
    fontSize: "32px", //100
    fontWeight: "700",
  },
  h3: {
    fontSize: "44px",
  },
  h4: {
    fontSize: "3.125vw", //60
    fontWeight: "400",
  },
  h5: {
    fontSize: "24px",
  },
  h6: {
    fontSize: "15px",
  },
  body1: {
    fontSize: "20", //60
    fontWeight: "500",
  },
  body2: {
    fontSize: "16", //40
    fontWeight: "400",
    fontFamily: "Noto Sans KR",
  },
};

export const darkTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
  allVariants: {
    whiteSpace: "pre-wrap",
    color: "#fff",
  },
};

export const lightTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
  allVariants: {
    whiteSpace: "pre-wrap",
    color: "#222",
  },
};
