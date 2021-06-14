const {
    getData,
    getUsers,
    getNotes,
    getUserData
} = require('./getData')

// ------------------------------------------------------------------------------------------- Render functions
// -------------------------------- Pick location page
async function location(req, res) {
    let nursing = await getData()

    res.render('location', {
        title: 'Kies uw locatie || Glory Days',
        dashboard: true,
        css: ['global', 'location'],
        js: ['sw'],
        nursing: nursing
    })
}

// -------------------------------- Dashboard page
function dashboard(req, res) {
    res.render('dashboard', {
        title: 'Dashboard ' + req.params.location + ' || Glory Days',
        dashboard: true,
        location: req.params.location,
        css: ['global', 'dashboard', 'nav'],
        js: ['sw', 'graphs'],
    })
}

// -------------------------------- Userlist with sort options
async function userSort(req, res) {
    let location = req.params.location
    let users = await getUsers(location)

    res.render('userList', {
        title: 'Patiënten ' + location + ' || Glory Days',
        userList: true,
        sort: true,
        location: location,
        css: ['global', 'userList', 'sort', 'nav'],
        js: ['sw'],
        users: users
    })
}

// -------------------------------- Userlist with user selected
async function userList(req, res) {
    let location = req.params.location
    let userKey = req.params.patient
    let users = await getUsers(location)

    res.render('userList', {
        title: 'Patiënten ' + location + ' || Glory Days',
        userList: true,
        userElem: true,
        sortbtn: true,
        location: location,
        css: ['global', 'userList', 'userelement', 'nav'],
        js: ['sw', 'userList'],
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
        title: 'Recente sessies ' + users[userKey].firstName + ' || Glory Days',
        userList: true,
        sortbtn: true,
        session: true,
        location: location,
        css: ['global', 'userList', 'userSessions', 'nav'],
        js: ['sw'],
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
        title: 'Patiënt notities || Glory Days',
        userList: true,
        sort: true,
        location: location,
        css: ['global', 'noteList', 'sort', 'nav'],
        js: ['sw'],
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
        title: 'Patiënt notities || Glory Days',
        userList: true,
        sortbtn: true,
        noteElem: true,
        location: location,
        css: ['global', 'noteList', 'noteElement', 'nav'],
        js: ['sw'],
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
        title: 'Nieuwe notitie || Glory Days',
        userList: true,
        sortbtn: true,
        newnote: true,
        location: location,
        css: ['global', 'noteList', 'newNoteElement', 'nav'],
        js: ['sw'],
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
        title: 'Herinneringen van ' + userData.firstName + ' || Glory Days',
        patient: true,
        location: location,
        memories: true,
        css: ['memories', 'nav'],
        js: ['sw'],
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

// -------------------------------- Settings page
async function settings(req, res) {
    res.render('settings', {
        title: 'Instellingen || Glory Days',
        settingsPage: true,
        location: req.params.location,
        css: ['global', 'settings', 'nav'],
        js: ['sw'],
    })
}

// -------------------------------- Page with charts
function chart(req, res) {
    res.render('chart', {
        title: 'Charts || Glory Days',
        css: ['global', 'chart'],
        js: ['index']
    })
}

// -------------------------------- Styleguide page
function styleGuide(req, res) {
    res.render('styleguide', {
        title: 'Styleguide || Glory Days',
        css: ['global', 'styleguide']
    })
}

// -------------------------------- Offline page
function offline(req, res) {
    res.render('offline', {
        title: 'U bent offline || Glory Days',
        css: ['sw', 'global', 'main']
    })
}

// -------------------------------- Not-found page
function error(req, res) {
    res.status(404).render('not-found', {
        title: 'Pagina niet gevonden || Glory Days',
        css: ['global', 'main'],
        js: ['sw']
    })
}

// ------------------------------------------------------------------------------------------- Export
module.exports = {
    userList,
    userSessions,
    styleGuide,
    userSort,
    noteSort,
    noteList,
    newNote,
    chart,
    dashboard,
    memories,
    settings,
    offline,
    location,
    error
}