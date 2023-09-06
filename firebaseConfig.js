import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAuxa1PkmWZG9d9qho30jnQSsnLVudrFwQ",
  authDomain: "zeeds-test-app.firebaseapp.com",
  projectId: "zeeds-test-app",
  storageBucket: "zeeds-test-app.appspot.com",
  messagingSenderId: "813689061964",
  appId: "1:813689061964:web:b173bbe0ccadf2bcae6ae9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);