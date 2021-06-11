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

async function getUsers(location) {
    return firebase
        .database()
        .ref('nursingHome/' + location + '/users')
        .once('value')
        .then(snapshot => {
            let data = snapshot.val()
            return data
        })
}

async function getUserData(location, user) {
    return firebase
        .database()
        .ref('nursingHome/' + location + '/users/' + user)
        .once('value')
        .then(snapshot => {
            let data = snapshot.val()
            return data
        })
}

async function getNotes(location, user) {
    return firebase
        .database()
        .ref('nursingHome/' + location + '/users/' + user + '/notes')
        .once('value')
        .then(snapshot => {
            let data = snapshot.val()
            return data
        })
}

module.exports = {
    getData,
    getUsers,
    getUserData,
    getNotes
}