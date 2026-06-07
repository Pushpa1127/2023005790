const axios = require("axios");

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwc2FuaXNoZUBnaXRhbS5pbiIsImV4cCI6MTc4MDgxMTM5OCwiaWF0IjoxNzgwODEwNDk4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZDM4MGM5ZTQtZjUyMS00NDEyLWE2YzItMzc0Y2I5NWVlMTAzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic2FuaXNoZXR0eSBwdXNocGEiLCJzdWIiOiIyYTdhZjhmMi01NzYyLTQxMDktOTQxZS0yMGM5OThhZDYwMzEifSwiZW1haWwiOiJwc2FuaXNoZUBnaXRhbS5pbiIsIm5hbWUiOiJzYW5pc2hldHR5IHB1c2hwYSIsInJvbGxObyI6IjIwMjMwMDU3OTAiLCJhY2Nlc3NDb2RlIjoid2dLdGdaIiwiY2xpZW50SUQiOiIyYTdhZjhmMi01NzYyLTQxMDktOTQxZS0yMGM5OThhZDYwMzEiLCJjbGllbnRTZWNyZXQiOiJxalZqSGNnUnFXWXlxYnRGIn0.5JNkHNtbvXoWZ4bYOhYzAqan8GWBmmOTxn4ykefvM7U';

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    console.log("Log Created:", response.data);

  } catch (error) {
    console.log("Status:", error.response?.status);
    console.log("Response:", error.response?.data);
  }
}

module.exports = Log;