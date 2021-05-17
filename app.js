// ------------------------------------------------------------------------------------------- Importing libraries
const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path');
const port = process.env.PORT || 8000

const app = express();
const hbs = exphbs.create({ extname: 'hbs', defaultLayout: 'main' })

// ------------------------------------------------------------------------------------------- Importing files
const {
    home,
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
    .get('/offline', offline)
    .get('*', error)

// Run app on port
app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})