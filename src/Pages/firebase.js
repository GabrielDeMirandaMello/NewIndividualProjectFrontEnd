
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBUArKghHbO0_l7yRs1VARkzEzKB_FFlw8",
  authDomain: "story-travels-19442.firebaseapp.com",
  projectId: "story-travels-19442",
  storageBucket: "story-travels-19442.appspot.com",
  messagingSenderId: "1000093156035",
  appId: "1:1000093156035:web:17a746a4097d734e585876"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)