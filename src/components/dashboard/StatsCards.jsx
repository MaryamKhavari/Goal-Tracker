import { Card, CardContent, Typography } from "@mui/material"

export default function StatsCards({ completion = 0, xp = 0, streak = 0 }) {
  const level = Math.max(1, Math.floor(xp / 500) + 1)

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">
          {completion}%
        </Typography>

        <Typography>
          Complete
        </Typography>

        <Typography>
          XP: {xp}
        </Typography>

        <Typography>
          Level: {level}
        </Typography>

        <Typography>
          Streak: {streak} days
        </Typography>
      </CardContent>
    </Card>
  )
}

