import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDGnA1qgiJ_RHOltwHOqsXBD60ZJO6iKQw",
    authDomain: "react-homework-aed92.firebaseapp.com",
    databaseURL: "https://react-homework-aed92-default-rtdb.firebaseio.com",
    projectId: "react-homework-aed92",
    storageBucket: "react-homework-aed92.appspot.com",
    messagingSenderId: "789294101587",
    appId: "1:789294101587:web:b29f7bf878943aa12702a6",
    measurementId: "G-Q09BBPF731"
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.database();

export const rootRef = db.ref("root");

export const chatsRef = rootRef.child("chats");
export const messagesRef = rootRef.child("messages");