const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "glory-days-project.firebaseapp.com",
    databaseURL: "https://glory-days-project-default-rtdb.firebaseio.com",
    projectId: "glory-days-project",
    storageBucket: "glory-days-project.appspot.com",
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
}

module.exports = firebaseConfig