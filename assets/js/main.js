const search = document.querySelector('.name-place input')
const inforOfWt = document.querySelectorAll('.infor-win-sun span')
const country = document.querySelector('.infor-of-place h2 span:nth-child(2)')
const place = document.querySelector('.infor-of-place h2 span:nth-child(1)')
const typeOfWT = document.querySelector('.clould')
const temps = document.querySelector('.poison span:nth-child(1)')
const wind = document.querySelector('.infor-win-sun span:nth-child(2) p')
const vsbility = document.querySelector('.infor-win-sun span:nth-child(1) p')
const posion = document.querySelector('.poison')


search.addEventListener('keyup', (e) => {
    const valueSearch = search.value.trim().toLowerCase()
    if (e.code == 'Enter') {
        render(valueSearch)
        search.value = ''
        search.focus()
    }
})

async function render(input) {
    const WT_API = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
    const res = await fetch(WT_API)
    const rs = await res.json()
    if (res.status === 404) {
        renderNotFound()
    }
    else {
        changeUI(rs)
    }

}

render('Ha Noi ')


function renderNotFound() {
    country.textContent = 'notfound'
    typeOfWT.textContent = 'not found'
    temps.textContent = 'none'
    wind.textContent = 'unKnow'
    vsbility.textContent = 'unKnow'
    place.textContent = 'unKnow'
}

function changeUI(rs) {
    country.textContent = rs.sys.country
    typeOfWT.textContent = rs.weather[0].main
    temps.textContent = Math.round(rs.main.temp)
    wind.textContent = rs.wind.speed + '(m/s)'
    vsbility.textContent = rs.visibility
    place.textContent = rs.name

}





