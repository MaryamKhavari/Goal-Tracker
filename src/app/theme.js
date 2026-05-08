// import { createTheme } from "@mui/material/styles"

// export const getTheme = (language, darkMode = false) =>
//   createTheme({
//     direction: language === "fa" ? "rtl" : "ltr",

//     palette: {
//       mode: darkMode ? "dark" : "light",
//     },
//   })

import { createTheme } from "@mui/material/styles"

export const getTheme = (
  darkMode,
  language
) =>

  createTheme({

    direction:
      language === "fa"
        ? "rtl"
        : "ltr",

    palette: {
      mode:
        darkMode
          ? "dark"
          : "light"
    }
  })