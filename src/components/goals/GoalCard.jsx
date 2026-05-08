import { LinearProgress } from "@mui/material"

export default function GoalCard({ progress }) {
  return (
    <div>

      <LinearProgress
        variant="determinate"
        value={progress}
      />

    </div>
  )
}