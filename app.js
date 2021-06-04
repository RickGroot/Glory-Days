// ------------------------------------------------------------------------------------------- Importing libraries
// const firebase = require('firebase/app')
// require("firebase/database")

const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path');
const port = process.env.PORT || 8000

const app = express();
const hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'main',
    partialsDir: ['views/partials/', 'views/elements/'],
    helpers: {
        ifEquals: function (a, b, options) {
            if (a == b) { return options.fn(this); }
            return options.inverse(this);
        }
    }
})

// ------------------------------------------------------------------------------------------- Importing files
const {
    home,
    userList,
    userSort,
    noteSort,
    noteList,
    dashboard,
    chart,
    newNote,
    location,
    memories,
    offline,
    error
} = require('./server/render');
// const firebaseConfig = require('./server/config')

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
    .get('/:nursinghome/dashboard', dashboard)
    .get('/patientlijst', userSort)
    .get('/notitielijst', noteSort)
    .get('/notitielijst/add', newNote)
    .get('/patientlijst/:id', userList)
    .get('/locatie', location)
    .get('/notitielijst/:id', noteList)
    .get('/herinneringen/:id', memories)
    .get('/chart', chart)
    .get('/offline', offline)
    .get('*', error)

// ------------------------------------------------------------------------------------------- Firebase init
// firebase.initializeApp(firebaseConfig)
// let database = firebase.database()
// console.log(database)

// ------------------------------------------------------------------------------------------- Run app on port
app.listen(process.env.PORT || port, () => {
    console.log(`Glory Days development site online at http://localhost:${port}`)
})