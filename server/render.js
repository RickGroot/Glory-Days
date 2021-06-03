const {
    users,
    notes
} = require('./data');
// ------------------------------------------------------------------------------------------- Render functions
// -------------------------------- Home page
function home(req, res) {
    res.render('home', {
        title: 'Glory Days',
        css: ['main']
    })
}

// -------------------------------- Dashboard page

function dashboard(req, res) {
    res.render('dashboard', {
        title: 'Glory Days Dashboard',
        dashboard: true,
        css: ['global', 'dashboard', 'nav'],
        js: ['graphs'],
    })
}



// -------------------------------- Userlist with sort options
function userSort(req, res) {
    res.render('userSort', {
        title: 'Mijn patiënten',
        userList: true,
        css: ['global', 'userList', 'sort', 'nav'],
        js: ['userList', 'index'],
        sort: false,
        users: users
    })
}

// -------------------------------- Userlist with user selected
function userList(req, res) {
    let userKey = req.params.id
    res.render('userList', {
        title: 'Mijn patiënten',
        userList: true,
        css: ['global', 'userList', 'userelement', 'nav'],
        js: ['userList', 'index'],
        sort: true,
        users: users,
        data: users[userKey],
        item: userKey
    })
}

// -------------------------------- Notelist with sort options
function noteSort(req, res) {
    let userKey = req.params.patient
    
    res.render('noteSort', {
        title: 'Mijn patiënten',
        userList: true,
        css: ['global', 'noteList', 'sort', 'nav'],
        js: ['userList', 'index'],
        sort: false,
        notes: notes
    })
}

// -------------------------------- Notelist with user selected
function noteList(req, res) {
    let noteKey = req.params.id

    res.render('noteList', {
        title: 'Mijn patiënten',
        userList: true,
        css: ['global', 'noteList', 'noteElement', 'nav'],
        js: ['userList', 'index'],
        sort: true,
        notes: notes,
        data: notes[noteKey],
        item: noteKey
    })
}

// -------------------------------- Notelist with user selected
function newNote(req, res) {
    res.render('newNote', {
        title: 'Mijn patiënten',
        userList: true,
        css: ['global', 'noteList', 'newNoteElement', 'nav'],
        js: ['userList', 'index'],
        sort: true,
        notes: notes
    })
}

// -------------------------------- Notelist with user selected
function memories(req, res) {
    res.render('memories', {
        title: 'Mijn patiënten',
        userList: true,
        css: ['memories', 'nav'],
        js: ['userList', 'index'],
        sort: true,
        notes: notes
    })
}

// -------------------------------- Page with charts
function chart(req, res) {
    res.render('chart', {
        title: 'Mijn chart',
        css: ['global', 'chart'],
        js: ['index'],
        users: users
    })
}

// -------------------------------- Offline page
function offline(req, res) {
    res.render('offline', {
        title: 'Glory Days || You are offline',
        css: ['main']
    })
}

// -------------------------------- Not-found page
function error(req, res) {
    res.status(404).render('not-found', {
        title: 'Glory Days || 404 Not Found',
        css: ['main']
    })
}

// ------------------------------------------------------------------------------------------- Export
module.exports = {
    home,
    userList,
    userSort,
    noteSort,
    noteList,
    newNote,
    chart,
    dashboard,
    memories,
    offline,
    error
}