import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyC7HjQnE_7qJvDrAWh6yuEwgCMma0e2AgY",
  authDomain: "fir-app-1fd88.firebaseapp.com",
  databaseURL: "https://fir-app-1fd88-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "fir-app-1fd88",
  storageBucket: "fir-app-1fd88.appspot.com",
  messagingSenderId: "430156181167",
  appId: "1:430156181167:web:e1a41d46aa64d72f012e5a",
  measurementId: "G-6HFH389Y6R"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase();
export const auth = getAuth(); 