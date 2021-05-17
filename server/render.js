// ------------------------------------------------------------------------------------------- Render functions
function home(req, res) {
    res.render('home', {
        title: 'Home page of the template'
    })
}

function offline(req, res) {
    res.render('offline', {
        title: 'You are offline'
    })
}

function error(req, res) {
    res.status(404).render('not-found', {
        title: '404 Not Found'
    })
}

// ------------------------------------------------------------------------------------------- Export
module.exports = {home, offline, error}