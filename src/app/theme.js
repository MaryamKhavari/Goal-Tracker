import { createTheme } from "@mui/material/styles"

export const getTheme = (language) =>
  createTheme({
    direction: language === "fa" ? "rtl" : "ltr",

    palette: {
     mode: darkMode ? "dark" : "light"
    }
  })