import NotificationCard from "../components/NotificationCard";

const notifications = [
  {
    ID: 1,
    Type: "Result",
    Message: "project-review",
    Timestamp: "2026-04-22 17:50:18",
  },
  {
    ID: 2,
    Type: "Event",
    Message: "tech-fest",
    Timestamp: "2026-04-22 17:50:06",
  },
  {
    ID: 3,
    Type: "Placement",
    Message: "AMD hiring",
    Timestamp: "2026-04-22 17:49:42",
  },
];

function AllNotifications() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>All Notifications</h2>

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          notification={item}
        />
      ))}
    </div>
  );
}

export default AllNotifications;