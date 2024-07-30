import React, { useState, useEffect } from "react";
import { requestPermission, onMessageListener } from "./firebase";
import { toast } from "react-toastify";

const PushNotifications = () => {
  const [notifications, setNotifications] = useState({ title: "", body: "" });

  useEffect(() => {
    requestPermission();

    onMessageListener()
      .then((payload) => {
        console.log("payload", payload);
        const { title, body } = payload.notification;

        setNotifications({ title, body });

        console.log("before");
        toast.success(`${title}: ${body}`, {
          duration: 60000,
          position: "top-right",
        });
        console.log("after");
      })
      .catch((err) => console.log("Failed to receive message", err));
  }, []);

  return (
    <div>
      <h1>Push Notifications</h1>
      <div>
        <h2>{notifications.title}</h2>
        <p>{notifications.body}</p>
      </div>
    </div>
  );
};

export default PushNotifications;
