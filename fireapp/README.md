### Steps to setup project on firebas and add them in config

1. Click on add new Project and enter Project name and select your country
2. Click on Created project You will see below screen
![Alt text](Capture.PNG?raw=true "Firebase image");
3. Click on "Add firebase to your web".
4. Copy config and paste it to root file or in config file
```
var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
};
firebase.initializeApp(config);
```
5. make sure you have imported firebase.
