import path from "path";
import * as admin from "firebase-admin";

const file = path.join(__dirname, "..", "..", "firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(file),
  databaseURL: "https://crud-firebase-fb4a6-default-rtdb.firebaseio.com",
});

export const firebaseRealtime = admin.database();
