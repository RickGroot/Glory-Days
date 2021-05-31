// ------------------------------------------------------------------------------------------- Importing libraries
// const functions = require('firebase-functions')
// const admin = require('firebase-admin')
const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path');
const port = process.env.PORT || 8000

const app = express();
const hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'main',
    partialsDir: ['views/partials/', 'views/elements/']
})

// admin.initializeApp(functions.config().firebase)

// const db = admin.firestore()


// app.post('/savepatient', async (req,res) =>{
//     const patient = {
//         patientName = "Tieneke",
//         patientAge = "43"
//     }
//     await db.collection('patienten').add(patient)
// })

// ------------------------------------------------------------------------------------------- Importing files
const {
    home,
    userList,
    userElement,
    chart,
    offline,
    error
} = require('./server/render');

// ------------------------------------------------------------------------------------------- Express config
app
    .set('view engine', 'hbs')
    .set('views', __dirname + '/views')
    .engine('hbs', hbs.engine)
    .use(express.static(path.resolve('public')))
    .use(express.json())

// ------------------------------------------------------------------------------------------- Express routes
app
    .get('/', home)
    .get('/userList', userList)
    // .get('/userList/:id', userElement)
    .get('/chart', chart)
    .get('/offline', offline)
    .get('*', error)

// Run app on port
app.listen(process.env.PORT || port, () => {
    console.log(`Glory Days development site online at http://localhost:${port}`)
})