console.log('JS connected!')
if ('serviceWorker' in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                return registration.update()
            })
            .catch((error) => {
                // registration failed
                console.log('Registration failed with ' + error)
            })
    })
}

// -------------------------------------------------------------------------- Document variables

let orange = '234, 111, 61'
let navy = '37, 51, 58'
let green = '126, 189, 178'
let bone = '231, 224, 214'
let brown = '194, 174, 146'
let khaki = '92, 81, 65'
let white = '255, 255, 255'

const emotions = [
    'EXTATISCH',
    'GELUKKIG',
    'BLIJ',
    'TEVREDEN',
    'ONTSPANNEN',
    'KALM',
    'MOE',
    'VERVEELD',
    'GEDEPRIMEERD',
    'GEFRUSTREERD',
    'BOOS',
    'GEAGITEERD'
]

Chart.defaults.font.size = 14
Chart.defaults.font.weight= 500
Chart.defaults.color= "#5c5141"
Chart.defaults.font.family='Lato'
console.log(Chart.defaults)

// -------------------------------------------------------------------------- Line Chart Config

const dataLineChart = {
    labels: [
        '1 minuut',
        '2 minuut',
        '3 minuut',
        '4 minuut',
        '5 minuut',
        '6 minuut',
    ],
    datasets: [{
        label: 'Positiviteit gedurende een sessie',
        borderColor: 'rgba(' + khaki + ', 0.8)',
        backgroundColor: 'rgba(' + khaki + ', 0.3)',
        borderWidth: 5,
        fill: true,
        lineTension: 0.3,
        data: [10, 25, 40, 50, 80, 75, 100],
    }]
}

const configLineChart = {
    type: 'line',
    data: dataLineChart,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }
}


// -------------------------------------------------------------------------- Bar Chart Config
const dataBarChart = {
    labels: emotions,
    datasets: [{
        label: 'emoties',
        data: [65, 59, 80, 81, 56, 55, 40, 55, 40, 35, 40, 20],
        backgroundColor: 'rgb(' + khaki + ')'
    }]
}

const configBarChart = {
    type: 'bar',
    data: dataBarChart,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
}


// -------------------------------------------------------------------------- Bar Chart Config
const dataBarChart2 = {
    labels: [
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
        '00:00'
    ],
    datasets: [{
        label: 'Bar Chart',
        data: [1, 3, 3, 9, 12, 9, 14, 24, 30, 34, 28, 21, 12, 4],
        backgroundColor: 'rgb(' + khaki + ')',
        color:  "#FF5733"
      
    }]
}

const configBarChart2 = {
    type: 'bar',
    data: dataBarChart2,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
}



// -------------------------------------------------------------------------- Render Charts
let myLineChart = new Chart(
    document.getElementById('myLineChart'),
    configLineChart
)

let myBarChart = new Chart(
    document.getElementById('myBarChart'),
    configBarChart
)

let myBarChart2 = new Chart(
    document.getElementById('myBarChart2'),
    configBarChart2
)