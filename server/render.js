const {
    getData,
    getUsers,
    getNotes,
    getUserData
} = require('./getData')

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
    let location = req.params.location

    res.render('dashboard', {
        title: 'Glory Days Dashboard',
        dashboard: true,
        location: location,
        css: ['global', 'dashboard', 'nav'],
        js: ['graphs'],
    })
}

// -------------------------------- Pick location page
async function location(req, res) {
    let nursing = await getData()

    res.render('location', {
        title: 'Glory Days Dashboard',
        dashboard: true,
        css: ['global', 'location'],
        js: ['graphs'],
        nursing: nursing
    })
}

// -------------------------------- Userlist with sort options
async function userSort(req, res) {
    let location = req.params.location
    let users = await getUsers(location)

    res.render('userList', {
        title: 'Mijn patiënten',
        userList: true,
        sort: true,
        location: location,
        css: ['global', 'userList', 'sort', 'nav'],
        js: ['userList', 'index'],
        users: users
    })
}

// -------------------------------- Userlist with user selected
async function userList(req, res) {
    let location = req.params.location
    let userKey = req.params.patient
    let users = await getUsers(location)

    res.render('userList', {
        title: 'Mijn patiënten',
        userList: true,
        userElem: true,
        sortbtn: true,
        location: location,
        css: ['global', 'userList', 'userelement', 'nav'],
        js: ['userList', 'index'],
        users: users,
        data: users[userKey],
        userKey: userKey,
    })
}

// -------------------------------- Userlist with user sessions
async function userSessions(req, res) {
    let location = req.params.location
    let userKey = req.params.patient
    let users = await getUsers(location)
    let sessions = users[userKey].sessions

    res.render('userList', {
        title: 'Herrinering patiënten',
        userList: true,
        sortbtn: true,
        session: true,
        location: location,
        css: ['global', 'userList', 'userSessions', 'nav'],
        js: ['userList', 'index'],
        users: users,
        data: users[userKey],
        userKey: userKey,
        sessions: sessions
    })
}

// -------------------------------- Notelist with sort options
async function noteSort(req, res) {
    let location = req.params.location
    let userKey = req.params.patient
    let notes = await getNotes(location, userKey)

    res.render('noteList', {
        title: 'Mijn patiënten',
        userList: true,
        sort: true,
        location: location,
        css: ['global', 'noteList', 'sort', 'nav'],
        js: ['userList', 'index'],
        notes: notes,
        userKey: userKey,
    })
}

// -------------------------------- Notelist with note selected
async function noteList(req, res) {
    let location = req.params.location
    let noteKey = req.params.id
    let userKey = req.params.patient
    let notes = await getNotes(location, userKey)

    res.render('noteList', {
        title: 'Mijn patiënten',
        userList: true,
        sortbtn: true,
        noteElem: true,
        location: location,
        css: ['global', 'noteList', 'noteElement', 'nav'],
        js: ['userList', 'index'],
        notes: notes,
        data: notes[noteKey],
        userKey: userKey,
        noteKey: noteKey
    })
}

// -------------------------------- Add a new note
async function newNote(req, res) {
    let location = req.params.location
    let noteKey = req.params.id
    let userKey = req.params.patient
    let notes = await getNotes(location, userKey)

    res.render('noteList', {
        title: 'Mijn patiënten',
        userList: true,
        sortbtn: true,
        newnote: true,
        location: location,
        css: ['global', 'noteList', 'newNoteElement', 'nav'],
        js: ['userList', 'index'],
        notes: notes,
        userKey: userKey,
        noteKey: noteKey
    })
}

// -------------------------------- Memories of user
async function memories(req, res) {
    let location = req.params.location
    let userKey = req.params.patient
    let userData = await getUserData(location, userKey)

    res.render('memories', {
        title: userData.firstName + ' || Glory Days',
        patient: true,
        location: location,
        memories: true,
        css: ['memories', 'nav'],
        js: ['userList', 'index'],
        firstName: userData.firstName,
        lastName: userData.lastName,
        pic: userData.pic,
        age: userData.age,
        nationality: userData.nationality,
        about: userData.about,
        memories: userData.memories,
        userKey: userKey,
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