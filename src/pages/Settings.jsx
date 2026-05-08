import { useTranslation } from "react-i18next"

export default function Settings() {
  const { t } = useTranslation()

  return (
    <section>
      <h1>{t("settings")}</h1>
      <p>Update your preferences here.</p>
    </section>
  )
}
