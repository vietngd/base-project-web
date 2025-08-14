"use client";

import { createTheme } from "@mui/material";
import { colors, typography, radius } from "./tokens";

const muiTheme = createTheme({
  palette: {
    primary: { main: colors.primary, dark: colors.primaryDark },
    secondary: { main: colors.secondary },
    error: { main: colors.error },
    warning: { main: colors.warning },
    success: { main: colors.success },
    grey: {
      100: colors.gray100,
      200: colors.gray200,
      300: colors.gray300,
      800: colors.gray800,
    },
  },
  typography: {
    fontFamily: typography.fontFamily,
    fontSize: 14,
    fontWeightRegular: typography.fontWeight.regular,
    fontWeightMedium: typography.fontWeight.medium,
    fontWeightBold: typography.fontWeight.bold,
  },
  shape: {
    borderRadius: parseInt(radius.md),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: radius.md,
          textTransform: "none",
          padding: "6px 16px",
        },
      },
    },
  },
});

export default muiTheme;
