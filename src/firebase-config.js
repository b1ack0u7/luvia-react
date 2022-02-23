import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCHvG9l0Fdp2xqqXgOW1Rw6ItqCCc0d7rU",
    authDomain: "testings-64d6b.firebaseapp.com",
    projectId: "testings-64d6b",
    storageBucket: "testings-64d6b.appspot.com",
    messagingSenderId: "897899630568",
    appId: "1:897899630568:web:075a5f6c0d12b48b945e5d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);