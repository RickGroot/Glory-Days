require('dotenv').config()
require("firebase/database")
const firebase = require('firebase/app')
const firebaseConfig = require('./config')

firebase.initializeApp(firebaseConfig)
let database = firebase.database()

async function getData() {
    return firebase
        .database()
        .ref('nursingHome')
        .once('value')
        .then(snapshot => {
            let data = snapshot.val()
            return data
        })
}


module.exports = {
    getData
}