import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then((registration) => {
      messaging.useServiceWorker(registration);
    });
}

navigator.serviceWorker
  .register("/firebase-messaging-sw.js")
  .then((registration) => {
    app.messaging().useServiceWorker(registration);
  });

export const requestPermission = () => {
  console.log("requesting User Permission .......");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("yey");

      return getToken(messaging, {
        vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY,
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log(currentToken);
          } else {
            console.log("failed");
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      console.log("Fss");
    }
  });
};

requestPermission();

export const onMessageListener = () =>
  new Promise((resolve, reject) => {
    console.log("onMESSAGE");
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
