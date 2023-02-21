import React, {useState}from 'react'
import './App.css'

function App() {

    const apiKey = 'afb5899925b1a3f4e22afbaa2c787f76'

    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

    const getWeather = (event) => {
        if (event.key == "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeatherData(data)
                    setCity("")
                }
            )
        }
    }

    return (
        <div className= "container" >
            <input 
            className= "input"
            placeholder = "Enter city..."
            onChange = {e => setCity(e.target.value)}
            value = {city}
            onKeyPress = {getWeather}
            />

            {typeof weatherData.main === 'undefined' ? (
                <div>
                    <p> Welcome to weather app! Enter in a city to get the weather of. </p>
                </div>
            ) : (
                <div className='weather-data'>
                    <p className='city'>{weatherData.name}</p>
                    <p className='temp'>{Math.round(weatherData.main.temp)}°F</p>
                    <p className='weather'>{weatherData.weather[0].main}</p>
                </div>
            )}
        </div>
    )
}

export default App