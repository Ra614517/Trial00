// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
   apiKey: "AIzaSyC0VsVrG4T7sEl7nZ4Zd-7OigtKWI3smvA",
  authDomain: "codkhang-c8cb8.firebaseapp.com",
  databaseURL: "https://codkhang-c8cb8-default-rtdb.firebaseio.com",
  projectId: "codkhang-c8cb8",
  storageBucket: "codkhang-c8cb8.firebasestorage.app",
  messagingSenderId: "411020704482",
  appId: "1:411020704482:web:861786dd37783eb8d4fcbb",
  measurementId: "G-7MRRD2ZZMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };