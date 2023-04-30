// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
    firebase: {
        apiKey: "AIzaSyDbMsn2lDp8IQvtoEoTIGVlUyGKwhfsCvI",
        authDomain: "materialkanban.firebaseapp.com",
        databaseURL: "https://materialkanban-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "materialkanban",
        storageBucket: "materialkanban.appspot.com",
        messagingSenderId: "465319731998",
        appId: "1:465319731998:web:7d8937a4a2ab5344b21f0f",
        measurementId: "G-M28Q3DGHL2"
    },
    production: false
};

// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);
