// ------------------------------------------------------------------------------------------- Render functions
function home(req, res) {
    res.render('home', {
        title: 'Glory Days'
    })
}

function style(req, res) {
    res.render('style', {
        title: 'Glory Days || Styleguide'
    })
}

function offline(req, res) {
    res.render('offline', {
        title: 'Glory Days || You are offline'
    })
}

function error(req, res) {
    res.status(404).render('not-found', {
        title: 'Glory Days || 404 Not Found'
    })
}

// ------------------------------------------------------------------------------------------- Export
module.exports = {home, style, offline, error}