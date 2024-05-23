import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyClt_2AcBUzpBfdhgFAuUZuvIPhyFIbZwM",
  authDomain: "lista-de-pesquisas.firebaseapp.com",
  databaseURL: "https://lista-de-pesquisas-default-rtdb.firebaseio.com",
  projectId: "lista-de-pesquisas",
  storageBucket: "lista-de-pesquisas.appspot.com",
  messagingSenderId: "580312547879",
  appId: "1:580312547879:web:0a89017eb1e0082a094402"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();