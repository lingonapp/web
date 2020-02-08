import React from "react";
import { FirebaseAppProvider } from "reactfire";
import "firebase/analytics";
import "firebase/performance";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

interface Props {}

const AuthProvider: React.FC<Props> = ({ children }) => {
  return (
    <FirebaseAppProvider firebaseConfig={config} initPerformance>
      {children}
    </FirebaseAppProvider>
  );
};

export default AuthProvider;
