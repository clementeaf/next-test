import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCjLKDzcW4UChTut2JgS082BlobrigIZvM",
    authDomain: "next-challenge-82619.firebaseapp.com",
    projectId: "next-challenge-82619",
    storageBucket: "next-challenge-82619.appspot.com",
    messagingSenderId: "750992577257",
    appId: "1:750992577257:web:709578f23a2cb26d651678"
};

export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
};


