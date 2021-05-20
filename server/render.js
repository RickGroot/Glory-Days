const {
    getData
} = require('./getData');

// ------------------------------------------------------------------------------------------- Render functions
function home(req, res) {
    res.render('home', {
        title: 'Glory Days',
        css: ['main']
    })
}

function style(req, res) {
    res.render('style', {
        title: 'Glory Days || Styleguide',
        css: ['styleguide']
    })
}

function start(req, res) {
    res.render('start', {
        title: 'Glory Days || Start screen',
        css: ['start']
    })
}

function tehuis(req, res) {
    res.render('tehuis', {
        title: 'Kies uw werkplek || Glory Days',
        css: ['tehuis']
    })
}

function patientList(req, res) {
    res.render('patientList', {
        title: 'Zoek uw patiënt || Glory Days',
        css: ['tehuis']
    })
}

function patient(req, res) {
    let id = req.params.id // ---------------------------testing id, same as data.js, from the HTML link
    let data = getData(id)

    res.render('patient', {
        title: patient + ' || Glory Days',
        css: ['patient', 'patientheader'],
        firstName: data.firstName,
        lastName: data.lastName,
        pic: data.pic,
        age: data.age,
        nationality: data.nationality,
        about: data.about,
        memories: data.memories
    })
}

function offline(req, res) {
    res.render('offline', {
        title: 'Glory Days || You are offline',
        css: ['main']
    })
}

function error(req, res) {
    res.status(404).render('not-found', {
        title: 'Glory Days || 404 Not Found',
        css: ['main']
    })
}

// ------------------------------------------------------------------------------------------- Export
module.exports = {
    home,
    style,
    start,
    tehuis,
    patientList,
    patient,
    offline,
    error
}