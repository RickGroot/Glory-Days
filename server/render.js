const {
    users,
    nursing,
    notes,
    userData
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

// -------------------------------- Pick location page
function location(req, res) {
    res.render('location', {
        title: 'Glory Days Dashboard',
        dashboard: true,
        css: ['global', 'location'],
        js: ['graphs'],
        nursing: nursing
    })
}

// -------------------------------- Userlist with sort options
function userSort(req, res) {
    res.render('userList', {
        title: 'Mijn patiënten',
        userList: true,
        sort: true,
        css: ['global', 'userList', 'sort', 'nav'],
        js: ['userList', 'index'],
        users: users
    })
}

// -------------------------------- Userlist with user selected
function userList(req, res) {
    let userKey = req.params.id
    res.render('userList', {
        title: 'Mijn patiënten',
        userList: true,
        sortbtn: true,
        css: ['global', 'userList', 'userelement', 'nav'],
        js: ['userList', 'index'],
        users: users,
        data: users[userKey],
        item: userKey
    })
}

// -------------------------------- Userlist with user memories
function userSessions(req, res) {
    let userKey = req.params.id
    res.render('userList', {
        title: 'Herrinering patiënten',
        userList: true,
        session: true,
        css: ['global', 'userList', 'userSessions', 'nav'],
        js: ['userList', 'index'],
        users: users,
        data: users[userKey],
        userKey: userKey
    })
}

// -------------------------------- Notelist with sort options
function noteSort(req, res) {
    let userKey = req.params.patient
    
    res.render('noteList', {
        title: 'Mijn patiënten',
        userList: true,
        sort: true,
        css: ['global', 'noteList', 'sort', 'nav'],
        js: ['userList', 'index'],
        notes: notes
    })
}

// -------------------------------- Notelist with user selected
function noteList(req, res) {
    let noteKey = req.params.id

    res.render('noteList', {
        title: 'Mijn patiënten',
        userList: true,
        sortbtn: true,
        css: ['global', 'noteList', 'noteElement', 'nav'],
        js: ['userList', 'index'],
        notes: notes,
        data: notes[noteKey],
        item: noteKey
    })
}

// -------------------------------- Add a new note
function newNote(req, res) {
    res.render('noteList', {
        title: 'Mijn patiënten',
        userList: true,
        sortbtn: true,
        newnote: true,
        css: ['global', 'noteList', 'newNoteElement', 'nav'],
        js: ['userList', 'index'],
        notes: notes
    })
}

// -------------------------------- Memories of user
function memories(req, res) {
    let data = userData[1]
    
    res.render('memories', {
        title: data.firstName + ' || Glory Days',
        patient: true,
        css: ['memories', 'nav'],
        js: ['userList', 'index'],
        firstName: data.firstName,
        lastName: data.lastName,
        pic: data.pic,
        age: data.age,
        nationality: data.nationality,
        about: data.about,
        memories: data.memories
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
    userSessions,
    noteSort,
    noteList,
    newNote,
    chart,
    dashboard,
    memories,
    offline,
    location,
    error
}