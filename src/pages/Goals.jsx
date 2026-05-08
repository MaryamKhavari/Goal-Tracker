import { useTranslation } from "react-i18next"

export default function Goals() {
  const { t } = useTranslation()

  return (
    <section>
      <h1>{t("goals")}</h1>

      <p>Your goals list will appear here.</p>
    </section>
  )
}
