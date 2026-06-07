import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import NotificationCard from "../components/NotificationCard";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";

export default function PriorityNotifications() {
  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getNotifications(
      1,
      20
    );

    const priority = {
      Placement: 3,
      Result: 2,
      Event: 1,
    };

    const sorted = [...data].sort(
      (a, b) =>
        priority[b.Type] -
        priority[a.Type]
    );

    setNotifications(sorted.slice(0, 10));
  };

  return (
    <>
      <Navbar />

      <Container sx={{ mt: 3 }}>
        <h2>
          Top Priority Notifications
        </h2>

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