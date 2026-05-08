// import { ThemeProvider } from "@mui/material/styles"
// import { CssBaseline } from "@mui/material"
// import { getTheme } from "./theme"
// import { SettingsProvider, useSettings } from "../context/SettingsContext"

// function ThemedProviders({ children }) {
//   const { language } = useSettings()

//   const theme = getTheme(language, false)

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {children}
//     </ThemeProvider>
//   )
// }

// export default function Providers({ children }) {
//   return (
//     <SettingsProvider>
//       <ThemedProviders>{children}</ThemedProviders>
//     </SettingsProvider>
//   )
// }

import { ThemeProvider } from "@mui/material/styles"

import { CssBaseline } from "@mui/material"

import {
  useContext
} from "react"

import {
  SettingsContext
} from "../context/SettingsContext"

import { getTheme } from "./theme"

export default function Providers({
  children
}) {

  const {
    darkMode,
    language
  } = useContext(SettingsContext)

  const theme =
    getTheme(darkMode, language)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}