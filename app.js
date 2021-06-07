// ------------------------------------------------------------------------------------------- Importing libraries
const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path');
const port = process.env.PORT || 8000

const app = express();
const hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'main',
    partialsDir: ['views/partials', 'views/elements', 'views/partials/lists', 'views/partials/listBlocks'],
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
    userSessions,
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
    .get('/:location/dashboard', dashboard)
    .get('/:location/patientlijst', userSort)
    .get('/:location/notitielijst/:patient', noteSort)
    .get('/:location/notitielijst/:patient/add', newNote)
    .get('/:location/notitielijst/:patient/:id', noteList)
    .get('/:location/patientlijst/sessies/:patient', userSessions)
    .get('/:location/patientlijst/:patient', userList)
    .get('/locatie', location)
    .get('/:location/herinneringen/:patient', memories)
    .get('/chart', chart)
    .get('/offline', offline)
    .get('*', error)

// ------------------------------------------------------------------------------------------- Run app on port
app.listen(process.env.PORT || port, () => {
    console.log(`Glory Days development site online at http://localhost:${port}`)
})