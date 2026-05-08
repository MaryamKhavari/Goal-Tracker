import { useEffect } from "react"

export default function SettingsProvider({ children }) {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    document.body.dir =
      language === "fa" ? "rtl" : "ltr"
  }, [language])

  return (
    <SettingsContext.Provider value={{ language, setLanguage }}>
      {children}
    </SettingsContext.Provider>
  )
}