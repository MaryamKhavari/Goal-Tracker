import { Card, CardContent, Typography } from "@mui/material"

export default function StatsCards() {
  return (
    <Card>
      <CardContent>

        <Typography variant="h4">
          72%
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

      </CardContent>
    </Card>
  )
}

