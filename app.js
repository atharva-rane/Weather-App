const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const apiKey = "57f63f122a68570739e8b333a7808b79";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiURL + `&q=${city}` + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./assets/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./assets/clear.png"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./assets/rain.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./assets/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./assets/mist.png"
        };

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

