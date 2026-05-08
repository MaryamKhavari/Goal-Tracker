import { useTranslation } from "react-i18next"

export default function Categories() {
  const { t } = useTranslation()

  return (
    <section>
      <h1>{t("categories")}</h1>
      <p>Manage your goal categories here.</p>
    </section>
  )
}
