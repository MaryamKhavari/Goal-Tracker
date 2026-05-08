import StatsCards from "../components/dashboard/StatsCards"
import QuickActions from "../components/dashboard/QuickActions"
import ActiveGoals from "../components/dashboard/ActiveGoals"
import CompletedGoals from "../components/dashboard/CompletedGoals"

export default function Dashboard() {
  return (
    <div>
      <StatsCards completion={72} xp={1200} streak={8} />
      <QuickActions />
      <ActiveGoals />
      <CompletedGoals />
    </div>
  )
}
