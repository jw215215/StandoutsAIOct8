// firebase-config.js

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9Bq2GWV6siNaBKc25i2vuolbjH1xqFkI",
    authDomain: "standoutsv1.firebaseapp.com",
    projectId: "standoutsv1",
    storageBucket: "standoutsv1.appspot.com",
    messagingSenderId: "1094418681842",
    appId: "1:1094418681842:web:ba8d6ded02a8f1660d256b",
    measurementId: "G-ZW08B90T45"
};

// Initialize Firebase globally
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();