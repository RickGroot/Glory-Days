const {
    users
} = require('./data');
// ------------------------------------------------------------------------------------------- Render functions
function home(req, res) {
    res.render('home', {
        title: 'Glory Days',
        css: ['main']
    })
}

function userList(req, res) {
    res.render('userList', {
        title: 'Mijn patiënten',
        css: ['global', 'userList'],
        users: users
    })
}

function chart(req, res) {
    res.render('chart', {
        title: 'Mijn chart',
        css: ['global', 'chart'],
        users: users
    })
}


function userElement(req, res) {
    res.render('userElement', {
        title: 'Glory Days || userElement',
        css: ['global', 'userElement']
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
    userElement,
    userList,
    chart,
    offline,
    error
}