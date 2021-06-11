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

const configLineChart = {
    type: 'line',
    data: dataLineChart,
    options: {
        responsive: true
    }
}

// -------------------------------------------------------------------------- Bar Chart Config
const dataBarChart = {
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
        responsive: true,
        plugins: {
            legend: {
                position: 'left'
            }
        }
    }
}

// -------------------------------------------------------------------------- Render Charts
let lineChart = new Chart(
    document.getElementById('lineChart'),
    configLineChart
)

let barChart = new Chart(
    document.getElementById('barChart'),
    configBarChart
)

let polarChart = new Chart(
    document.getElementById('polarChart'),
    configPolarChart
)

// -------------------------------------------------------------------------- Vertical Nav


// Get the H1 heading
const slide1 = document.getElementById('slide-1')
const slide2 = document.getElementById('slide-2')
const slide3 = document.getElementById('slide-3')
const container = document.querySelector('.slides')
const href1 = document.getElementById('aSlide-1')
const href2 = document.getElementById('aSlide-2')
const href3 = document.getElementById('aSlide-3')

// Get it's position in the viewport
const bounding = container.getBoundingClientRect()

let isInViewport = function (elem) {
    let bounding = elem.getBoundingClientRect()
    return (
        bounding.top >= 0 &&
        bounding.left >= 40  &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

container.addEventListener('scroll', e => {
    if (isInViewport(slide1)) {
        href1.classList.add("sliderActive")
    } else {
        href1.classList.remove("sliderActive")
    }

    if (isInViewport(slide2)) {
        href2.classList.add("sliderActive")
    } else {
        href2.classList.remove("sliderActive")
    }

    if (isInViewport(slide3)) {
        href3.classList.add("sliderActive")
    } else {
        href3.classList.remove("sliderActive")
    }
})