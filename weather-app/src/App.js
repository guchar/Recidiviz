import React, {useState}from 'react'
import './App.css'

function App() {

    const apiKey = '3608b6060d343e91ca3c9ba44141abdd'

    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

    const getWeather = (event) => {
        if (event.key == "Enter") {
            fetch()
        }
    }

    return (
        <div className= 'container' >
            <input className= 'input' placeholder = 'Enter city...' />
            

        </div>
    )
}

export default App