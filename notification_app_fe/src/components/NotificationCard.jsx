import { Card, CardContent, Typography } from "@mui/material";

export default function NotificationCard({
  notification,
  viewed,
}) {
  return (
    <Card
      sx={{
        mb: 2,
        backgroundColor: viewed
          ? "#f5f5f5"
          : "#e3f2fd",
      }}
    >
      <CardContent>
        <Typography variant="h6">
          {notification.Type}
        </Typography>

        <Typography variant="body1">
          {notification.Message}
        </Typography>

        <Typography variant="caption">
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}