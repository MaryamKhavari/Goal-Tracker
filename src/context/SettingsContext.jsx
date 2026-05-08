import { createContext, useContext, useEffect, useMemo, useState } from "react"

export const SettingsContext = createContext(null)

export function SettingsProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    document.body.dir = language === "fa" ? "rtl" : "ltr"
  }, [language])

  const value = useMemo(
    () => ({ darkMode, setDarkMode, language, setLanguage }),
    [darkMode, language]
  )

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)

  if (!context) {
    throw new Error("useSettings must be used inside SettingsProvider")
  }

  return context
}
