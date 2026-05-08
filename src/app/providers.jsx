import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { getTheme } from "./theme"
import { SettingsProvider, useSettings } from "../context/SettingsContext"

function ThemedProviders({ children }) {
  const { language, darkMode } = useSettings()
  const theme = getTheme(darkMode, language)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default function Providers({ children }) {
  return (
    <SettingsProvider>
      <ThemedProviders>{children}</ThemedProviders>
    </SettingsProvider>
  )
}
