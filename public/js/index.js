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
        backgroundColor: 'rgba(' + orange + ', 0.8)',
        borderColor: 'rgba(' + orange + ', 0.8)',
        fill: true,
        lineTension: 0.3,
        data: [10, 25, 40, 50, 80, 75, 100],
    }]
}

const configLineChart = {
    type: 'line',
    data: dataLineChart,
    options: {
        responsive: true
    }
}

// -------------------------------------------------------------------------- Line Chart Config

const dataLineChart2 = {
    labels: emotions,
    datasets: [{
        label: 'Voor een sessie',
        backgroundColor: 'rgba(' + orange + ', 0.8)',
        borderColor: 'rgba(' + orange + ', 0.8)',
        data: [10, 15, 25, 20, 40, 35, 50, 55, 80, 70, 75, 80, 75],
    }, {
        label: 'Na een sessie',
        backgroundColor: 'rgba(' + green + ', 0.8)',
        borderColor: 'rgba(' + green + ', 0.8)',
        data: [80, 85, 70, 75, 70, 75, 70, 40, 20, 25, 20, 15, 20],
    }]
}

const configLineChart2 = {
    type: 'line',
    data: dataLineChart2,
    options: {
        responsive: true
    }
}

// -------------------------------------------------------------------------- Line Chart Config

const dataLineChart3 = {
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

    ],
    datasets: [{
        label: 'Piekuren',
        backgroundColor: 'rgba(' + orange + ', 0.8)',
        lineTension: 0.3,
        borderColor: 'rgba(' + orange + ', 0.8)',
        data: [60, 75, 70, 30, 40, 60, 70, 50, 30, 50, 80, 90, 85, 60],
    }]
}

const configLineChart3 = {
    type: 'line',
    data: dataLineChart3,
    options: {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 100
            }
        }
    },
}

// -------------------------------------------------------------------------- Line Chart Config

const dataLineChart4 = {
    labels: emotions,
    datasets: [{
        label: 'Emoties',
        backgroundColor: 'rgba(' + orange + ', 0.8)',
        borderColor: 'rgba(' + orange + ', 0.8)',
        data: [10, 15, 25, 20, 40, 35, 50, 55, 80, 70, 75, 80, 75],
    }]
}

const configLineChart4 = {
    type: 'line',
    data: dataLineChart4,
    options: {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 100
            }
        }
    },
}


// -------------------------------------------------------------------------- Doughnut Chart Config

const dataDoughnutChart = {
    labels: [
        'Negatief',
        'Positief'
    ],
    datasets: [{
        label: 'Doughnut',
        data: [300, 500, ],
        backgroundColor: [
            'rgba(' + orange + ', 0.8)',
            'rgba(' + green + ', 0.9)'
        ],
        hoverOffset: 4
    }]
}

const configDoughnutChart = {
    type: 'doughnut',
    data: dataDoughnutChart,
    options: {
        responsive: true
    }
}

// -------------------------------------------------------------------------- Radar Chart Config

const dataRadarChart = {
    labels: emotions,
    datasets: [{
        label: 'Voor een sessie',
        data: [55, 44, 55, 60, 60, 60, 50, 60, 78, 80, 85, 65],
        fill: true,
        backgroundColor: 'rgba(' + orange + ', 0.8)',
        pointBorderColor: 'rgb(' + white + ')',
    }, {
        label: 'Na een sessie',
        data: [65, 75, 90, 81, 70, 75, 60, 60, 65, 60, 57, 70],
        fill: true,
        backgroundColor: 'rgba(' + green + ', 0.9)',
        pointBorderColor: 'rgb(' + white + ')',
    }]
}

const configRadarChart = {
    type: 'radar',
    data: dataRadarChart,
    options: {
        responsive: true,
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },
}
// -------------------------------------------------------------------------- Bubble Chart Config

const dataBubbleChart = {
    datasets: [{
        label: 'Piekuren',
        data: [{
            x: 12,
            y: 50,
            r: 10
        }, {
            x: 13,
            y: 20,
            r: 10
        }, {
            x: 14,
            y: 40,
            r: 10
        }, {
            x: 15,
            y: 60,
            r: 10
        }, {
            x: 16,
            y: 80,
            r: 10
        }, {
            x: 17,
            y: 50,
            r: 10
        }, {
            x: 18,
            y: 30,
            r: 10
        }, {
            x: 19,
            y: 55,
            r: 10
        }, {
            x: 20,
            y: 80,
            r: 10
        }, {
            x: 21,
            y: 70,
            r: 10
        }, {
            x: 22,
            y: 90,
            r: 10
        }, {
            x: 23,
            y: 60,
            r: 10
        }
        ],
        backgroundColor: 'rgba(' + orange + ', 0.8 )'
    }]
};

const configBubbleChart = {
    type: 'bubble',
    data: dataBubbleChart,
    options: {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 100
            }
        }
    },
};

// -------------------------------------------------------------------------- Polar Chart Config
const dataPolarChart = {
    labels: [
        'Blij',
        'Gelukkig',
        'Tevreden',
        'Kalm',
        'Ontspannen'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
            'rgba(' + orange + ', 0.8)',
            'rgba(' + green + ', 0.8)',
            'rgba(' + navy + ', 0.8)',
            'rgba(' + khaki + ', 0.8)',
            'rgba(' + bone + ', 0.8)',
        ]
    }]
}

const configPolarChart = {
    type: 'polarArea',
    data: dataPolarChart,
    options: {
        responsive: true
    }
}

// -------------------------------------------------------------------------- Polar Chart Config
const dataPolarChart2 = {
    labels: [
        '11:00',
        '14:00',
        '19:00',
        '21:00',
        '22:00'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [100, 80, 60, 40, 55],
        backgroundColor: [
            'rgba(' + orange + ', 0.8)',
            'rgba(' + green + ', 0.8)',
            'rgba(' + navy + ', 0.8)',
            'rgba(' + khaki + ', 0.8)',
            'rgba(' + bone + ', 0.8)',
        ]
    }]
};

const configPolarChart2 = {
    type: 'polarArea',
    data: dataPolarChart2,
    options: {
        responsive: true
    }
};

// -------------------------------------------------------------------------- Bar Chart Config
const dataBarChart = {
    labels: emotions,
    datasets: [{
        label: 'Bar Chart',
        data: [65, 59, 80, 81, 56, 55, 40, 55, 40, 35, 40, 20],
        backgroundColor: 'rgb(' + khaki + ')'
    }]
}

const configBarChart = {
    type: 'bar',
    data: dataBarChart,
    options: {
        responsive: true,
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
        '1 minuut',
        '2 minuut',
        '3 minuut',
        '4 minuut',
        '5 minuut',
        '6 minuut',
        '7 minuut',
        '8 minuut',
        '9 minuut',
        '10 minuut',
    ],
    datasets: [{
        label: 'Bar Chart',
        data: [12, 14, 34, 56, 40, 67, 75, 80, 67, 80],
        backgroundColor: 'rgb(' + khaki + ')'
    }]
}

const configBarChart2 = {
    type: 'bar',
    data: dataBarChart2,
    options: {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 100
            }
        }
    },
}

// -------------------------------------------------------------------------- Bar Chart Config
const dataBarChart3 = {
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
        backgroundColor: 'rgb(' + khaki + ')'
    }]
}

const configBarChart3 = {
    type: 'bar',
    data: dataBarChart3,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
}

// -------------------------------------------------------------------------- Bar Chart Config
const dataBarChart4 = {
    labels: [
        'Positief',
        'Negatief'
    ],
    datasets: [{
        label: 'Emoties',
        data: [60, 40],
        backgroundColor: 'rgb(' + khaki + ')'
    }]
}

const configBarChart4 = {
    type: 'bar',
    data: dataBarChart4,
    options: {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 100
            }
        }
    },
}


// -------------------------------------------------------------------------- Render Charts
let myLineChart = new Chart(
    document.getElementById('myLineChart'),
    configLineChart
)

let myLineChart2 = new Chart(
    document.getElementById('myLineChart2'),
    configLineChart2
)

let myLineChart3 = new Chart(
    document.getElementById('myLineChart3'),
    configLineChart3
)

let myLineChart4 = new Chart(
    document.getElementById('myLineChart4'),
    configLineChart4
)

let myDoughnutChart = new Chart(
    document.getElementById('myDougnutChart'),
    configDoughnutChart
)

let myRadarChart = new Chart(
    document.getElementById('myRadarChart'),
    configRadarChart
)

let myBubbleChart = new Chart(
    document.getElementById('myBubbleChart'),
    configBubbleChart
)

let myPolarChart = new Chart(
    document.getElementById('myPolarChart'),
    configPolarChart
)

let myPolarChart2 = new Chart(
    document.getElementById('myPolarChart2'),
    configPolarChart2
)

let myBarChart = new Chart(
    document.getElementById('myBarChart'),
    configBarChart
)

let myBarChart2 = new Chart(
    document.getElementById('myBarChart2'),
    configBarChart2
)

let myBarChart3 = new Chart(
    document.getElementById('myBarChart3'),
    configBarChart3
)

let myBarChart4 = new Chart(
    document.getElementById('myBarChart4'),
    configBarChart4
)