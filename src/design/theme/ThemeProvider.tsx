import React, { FC } from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider as MaterialThemeProvider
} from "@material-ui/core/styles";

const ThemeProvider: FC = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  let theme = createMuiTheme({
    palette: {
      // type: prefersDarkMode ? "dark" : "light",
      primary: {
        main: "#e91e62"
      },
      secondary: {
        main: "#f1c232"
      }
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(",")
    },
    props: {
      MuiButtonBase: {
        disableRipple: true // No more ripple, on the whole application 💣!
      }
    }
  });
  theme = responsiveFontSizes(theme);
  return (
    <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
  );
};

export default ThemeProvider;
