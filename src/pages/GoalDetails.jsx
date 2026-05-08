import { useTranslation } from "react-i18next"

export default function GoalDetails() {
  const { t } = useTranslation()

  return (
    <section>
      <h1>{t("goalDetails")}</h1>
      <p>Goal details will be shown here.</p>
    </section>
  )
}
