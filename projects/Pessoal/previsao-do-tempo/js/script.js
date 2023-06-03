


const key = "cebcd482eda57fa9a6714c1c2ba91885"




function buttonClick() {
    const city = document.querySelector('.city').value

    searchCity(city)
};

async function searchCity(city) {



    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    screenData(dados)
}

function screenData(dados) {
    document.querySelector('#cidade').innerHTML = dados.name
    document.querySelector('#temp').innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector('#info').innerHTML = dados.weather[0].description
    document.querySelector('#humidity').innerHTML = 'Umidade: ' + dados.main.humidity + "%"
    document.querySelector('#clim').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    

    console.log(dados)
}