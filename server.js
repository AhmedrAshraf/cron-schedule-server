const cron = require("node-cron");
const express = require("express");
const firebase = require("firebase");
const axios = require("axios").default;

const app = express();
const port = 800;

var firebaseConfig = {
  apiKey: "AIzaSyA-gwShYTSeDiroeDewu7PV9piKVslDAAQ",
  authDomain: "headlines-9ced6.firebaseapp.com",
  databaseURL: "https://headlines-9ced6.firebaseio.com",
  projectId: "headlines-9ced6",
  storageBucket: "headlines-9ced6.appspot.com",
  messagingSenderId: "683260041768",
  appId: "1:683260041768:web:45b8076cd6f121d112731d",
};
firebase.initializeApp(firebaseConfig);

cron.schedule("*/10 * * * * *", () => {
  firebase
    .database()
    .ref("/users")
    .once("value")
    .then((snapshot) => {
      let obj = Object.keys(snapshot.val()).map((E) => E);
      for (let i = 0; i < obj.length; i++) {
        const token = snapshot.val()[obj[i]].token;
        console.log("🚀 ~ file: server.js ~ line 31 ~ .then ~ token", token);
        axios.post(
          "https://exp.host/--/api/v2/push/send",
          {
            to: token,
            sound: "default",
            title: "Headling",
            body: `We Catch Important News For You!`,
          },
          {
            headers: {
              Accept: "application/json",
              "Accept-encoding": "gzip, deflate",
              "Content-Type": "application/json",
            },
          }
        );
      }
    });
  console.log("running a task");
});

app.listen(port, () => console.log("We Are Live"));
