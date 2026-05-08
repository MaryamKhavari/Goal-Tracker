import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { getTheme } from "./theme"
import { useSettings } from "../context/SettingsContext"

export default function Providers({ children }) {
  const { language } = useSettings()

  const theme = getTheme(language)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}