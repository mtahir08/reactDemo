import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
};
firebase.initializeApp(config);
