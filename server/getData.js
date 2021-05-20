const { userData } = require('./data');

function getData(id) {
    let data = userData[id]
    return data
}

module.exports = {
    getData
}