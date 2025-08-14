"use client";

import * as React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { deepmerge } from "@mui/utils";
const baseTheme = createTheme({
  palette: { primary: { main: "#1976d2" } },
  shape: { borderRadius: 10 },
});

export type AppThemeOptions = Parameters<typeof createTheme>[0];

export function extendTheme(options: AppThemeOptions) {
  return createTheme(deepmerge(baseTheme, options));
}

export default function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
