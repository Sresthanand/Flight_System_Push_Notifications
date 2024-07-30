const admin = require("firebase-admin");
const serviceAccount = require("./flight-management-system-7a80f-firebase-adminsdk-thh18-815317303e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const sendNotification = async (registrationToken) => {
  const messageSend = {
    token: registrationToken,
    notification: {
      title: "IMPORTANT UPDATE !! ",
      body: "Your flight 6E 2341 is on time. Departure gate: A12",
    },
    data: {
      key1: "value1",
      key2: "value2",
    },
    android: {
      priority: "high",
    },
    apns: {
      payload: {
        aps: {
          badge: 42,
        },
      },
    },
  };

  admin
    .messaging()
    .send(messageSend)
    .then((response) => {
      console.log("Succes :", response);
    })
    .catch((error) => {
      console.log("error :", error);
    });
};

const registrationToken =
  "d-7ymaVPRvJW_lRfL2c9af:APA91bHeVLPe4IKt7D5hotdXAZhvIcGJR0S7YcIITT04TUBMSx7WDTDLkbbGpJScKmRkKk5oQt4PZqmjPNzDELeeTET4owwmxxYf1dmHZsSAnRPBi2-mxH3ZpBLR7yP7uI_Vrkt56NzG";

sendNotification(registrationToken);
