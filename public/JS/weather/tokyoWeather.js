const key = "c774d9733ea7794532a35eab233c5877";
const city = ['osaka', 'seoul', 'vancouver', 'california', 'oslo', 'valletta', 'paris']
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city[0]}&appid=${key}`;


const minTemperature = document.querySelector('.minimumTemp');
const maxTemperature = document.querySelector('.maximumTemp');
const currentTemp = document.querySelector('.currentTemp');
const currentWeatherStatus = document.querySelector('.currentWeatherStatus');


const requestWeather = async () => {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);

    const city_weather = {
        name: data.name,
        temp: data.main.temp,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        currentWeather: data.weather[0].main
    };

    // console.log(city_weather.temp);
    minTemperature.textContent = `${Math.floor(city_weather.minTemp - 273.15)} ° C`;
    maxTemperature.textContent = `${Math.floor(city_weather.maxTemp - 273.15)} ° C`;
    currentTemp.textContent = `${Math.floor(city_weather.temp - 273.15)} ° C`;

    currentWeatherStatus.textContent = `${city_weather.name}의 현재 날씨는 ${city_weather.currentWeather}`;
    return city_weather;
};


requestWeather();
setInterval(()=>{
    requestWeather();
}, 1000);



