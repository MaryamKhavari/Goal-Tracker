import StatsCards from "../components/dashboard/StatsCards"
import QuickActions from "../components/dashboard/QuickActions"
import ActiveGoals from "../components/dashboard/ActiveGoals"
import CompletedGoals from "../components/dashboard/CompletedGoals"
import { useTranslation } from "react-i18next"

export default function Dashboard() {
  const { t } =
    useTranslation()
  return (
    <div>
      <h1>
        {t("dashboard")}
      </h1>

      <h2>
        {t("welcome")}
      </h2>

      <p>
        {t("activeGoals")}
      </p>

      <StatsCards completion={72} xp={1200} streak={8} />
      <QuickActions />
      <ActiveGoals />
      <CompletedGoals />
    </div>
  )
}
