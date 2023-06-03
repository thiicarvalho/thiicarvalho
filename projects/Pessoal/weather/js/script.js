

const key = "cebcd482eda57fa9a6714c1c2ba91885"

const btnClick = document.querySelector('#btnClick');

btnClick.addEventListener('click', startSearch);

function startSearch() {
    const cityLocate = document.querySelector('.city').value

    searchCity(cityLocate);
};


async function searchCity (cityLocate) {
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityLocate}&appid=${key}&lang=pt_br&units=metric`).then(reponse => reponse.json())

    screenData(dados)
};


function screenData(dados) {
    document.querySelector('.locate').innerHTML = dados.name
    document.querySelector('.country').innerHTML = dados.sys.country
    document.querySelector('.temp').innerHTML =  Math.floor(dados.main.temp) + ' °C'
    document.querySelector('.climTxt').innerHTML = dados.weather[0].description
    document.querySelector('.climImg').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    document.querySelector('.min').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    document.querySelector('.max').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    document.querySelector('.feels').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    document.querySelector('.temp-feels').innerHTML = Math.floor(dados.main.feels_like) + ' °C'
    document.querySelector('.temp-min').innerHTML = Math.floor(dados.main.temp_min) + ' °C'
    document.querySelector('.temp-max').innerHTML = Math.floor(dados.main.temp_max) + ' °C'
    
    console.log(dados)
    
};


