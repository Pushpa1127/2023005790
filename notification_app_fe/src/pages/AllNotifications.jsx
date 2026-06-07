import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import NotificationCard from "../components/NotificationCard";
import Navbar from "../components/Navbar";
import {
  Container,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

export default function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [type, setType] = useState("");
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    loadNotifications();
  }, [type, limit]);

  const loadNotifications = async () => {
    try {
      const data = await getNotifications(
        1,
        limit,
        type
      );

      setNotifications(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />

      <Container sx={{ mt: 3 }}>
        <h2>All Notifications</h2>

        <Select
          value={type}
          onChange={(e) =>
            setType(e.target.value)
          }
          sx={{ mr: 2 }}
        >
          <MenuItem value="">
            All
          </MenuItem>
          <MenuItem value="Event">
            Event
          </MenuItem>
          <MenuItem value="Result">
            Result
          </MenuItem>
          <MenuItem value="Placement">
            Placement
          </MenuItem>
        </Select>

        <TextField
          type="number"
          label="Limit"
          value={limit}
          onChange={(e) =>
            setLimit(e.target.value)
          }
        />

        <br />
        <br />

        {notifications.map((n) => (
          <NotificationCard
            key={n.ID}
            notification={n}
            viewed={
              localStorage.getItem(n.ID)
            }
          />
        ))}
      </Container>
    </>
  );
}