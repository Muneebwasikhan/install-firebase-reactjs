import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAHc6m8fcPCTHGScJb-U7lyOfZP3LT5MhA",
    authDomain: "campus-requirements-panacloud.firebaseapp.com",
    databaseURL: "https://campus-requirements-panacloud.firebaseio.com",
    projectId: "campus-requirements-panacloud",
    storageBucket: "campus-requirements-panacloud.appspot.com",
    messagingSenderId: "473980182474"
  };
  firebase.initializeApp(config);
  
  const db = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  db.settings(settings);


  
  export default (db);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
