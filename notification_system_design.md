# Stage 1

# Stage 1 - Notification System Design

## 1. Overview
This notification system allows students to receive updates regarding placements, results, and events in real time. It supports fetching, creating, and updating notifications.

---

## 2. Core API Endpoints

### 2.1 Get All Notifications
GET /api/notifications

Description: Fetch all notifications for a student.

**Headers:**
Content-Type: application/json

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "type": "Placement | Result | Event",
      "message": "Notification message",
      "timestamp": "2026-06-07T10:00:00Z",
      "isRead": false
    }
  ]
}
### 2.2 API Get Unread Notifications
GET /api/notifications/unread
{
  "success": true,
  "data": []
}
### 2.3 API Get Unread Notifications
POST /api/notifications
{
  "type": "Placement",
  "message": "Company is hiring for Software Engineer role",
  "timestamp": "2026-06-07T10:00:00Z"
}
{
  "success": true,
  "message": "Notification created successfully"
}
### 2.1 API Mark Notification as Read
PATCH /api/notifications/{id}/read
{
  "success": true,
  "message": "Notification marked as read"
}
# Stage 2
...
# Stage 3
...
# Stage 4
...
# Stage 5
...
# Stage 6