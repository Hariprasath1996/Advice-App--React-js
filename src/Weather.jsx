
import moonFreeze from "./assets/moonFreeze.png";
import morn from "./assets/morn.png";
import moonCloudy from "./assets/moonCloudy.png";
import mornRain from "./assets/mornRain.png"
import nytFreeze from "./assets/nytFreeze.png"
import nytRainy from "./assets/nytRainy.png"
import rainy from "./assets/rainy.png"
import snooze from "./assets/snooze.png"
import sunFreeze from "./assets/sunFreeze.png"
import sunnySmile from "./assets/sunnySmile.png"
import sunny from "./assets/sunny.png"
import thunder from "./assets/thunder.png"
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { GiWindpump } from "react-icons/gi";





//  create a new component and passing props 
const WeatherDetails = ({ icon, temp, city, country, lat, lon, humidityPer, windyPer }) => {
    return (
        <>
            <div className="image">
                <img className="sep-img" src={icon} style={{ width: 160, height: 160, padding: 10 }} alt="image" />
            </div>
            <div className="temp">{temp}°C</div>
            <div className="city">{city}</div>
            <div className="country">{country}</div>
            <div className="cord">
                <div className="latitude">
                    <span className="lat-name">Latitude</span>
                    <span className="lat-value" >{lat}</span>
                </div>
                <div className="longitude">
                    <span className="long-name">Longitude</span>
                    <span className="long-value">{lon}</span>
                </div>
            </div>
            <div className="cord-container">
                <div className="Humidity-container">
                    <div className="Humidity-icon">
                        <WiHumidity />{humidityPer}%
                    </div>
                    <div className="Humidity-data">
                        <div className="Humidity-percentage">
                        </div>
                        <div className="Humidity-text">
                            HUMIDITY
                        </div>
                    </div>
                </div>
                <div className="Wind-container">
                    <div className="Wind-icon">
                        <GiWindpump /> {windyPer}km/h
                    </div>
                    <div className="Wind-data">
                        <div className="Wind-percentage">
                        </div>
                        <div className="Wind-text">
                            WIND
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}


const Weather = () => {
    // create api key here 

    let apiKey = "cab9954e5bc84fcf27f139f6e07fbd25"

    // create state variables
    const [icon, setIcon] = useState()
    const [temp, setTemp] = useState(0)
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)
    const [humidityPer, setHumidityPer] = useState(0)
    const [windyPer, setWindPer] = useState(0)

    // user choice set variables - when they entered values in search box 
    const [text, setText] = useState("Erode")
    const [cityNotFound, setCityNotFound] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()


    // weather icon details - image changing
    const weatherCode = {
        "01d": sunny,
        "01n": nytFreeze,
        "02d": sunnySmile,
        "02n": nytFreeze,
        "03d": morn,
        "03n": snooze,
        "04d": sunFreeze,
        "04n": moonFreeze,
        "09d": nytRainy,
        "09n": nytFreeze,
        "010d": mornRain,
        "010n": rainy,
        "011d": moonCloudy,
        "011n": thunder,
    }
    // 

    // Create async function for api method
    const search = async () => {
        setIsLoading(true);
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=Metric`
        try {
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);
            if (data.cod === "404") {
                console.error("CITY NOT FOUND");
                setCityNotFound(true);
                setIsLoading(true)
                return;
            }
            setTemp(Math.floor(data.main.temp))
            setLat(data.coord.lat)
            setLon(data.coord.lon)
            setHumidityPer(data.main.humidity)
            setWindPer(data.wind.speed)
            setCity(data.name)
            setCountry(data.sys.country)
            const weatherIconsGet = data.weather[0].icon;
            setIcon(weatherCode[weatherIconsGet])
            setCityNotFound(false)
        } catch (error) {
            console.error("Error message occurred :", error.message);
            setError("An Error Occurred While Fetching Weather Data")
        } finally {
            setIsLoading(false);

        }
    };
    // search a result for  enter the value in input 
    const handleSearch = (e) => {
        setText(e.target.value);
    }
    // press enter button to declare the value on screen , so that we create a function for that 
    const keyDown = (e) => {
        if (e.key === "Enter") {
            search();
        }
    }
    useEffect(function () {
        search()
    }, [])




    return (<>
        {/* <h1>Weather application</h1> */}
        <div className="container">
            <div className="search-container">
                <input className="input-search" type="text" value={text} onChange={handleSearch} onKeyDown={keyDown} placeholder="Search City" />
                <FaSearch className="search-icon" onClick={() => {
                    search()
                }} />
            </div>
            {isLoading && <div className="loading-message">Loading ...</div>}
            {cityNotFound && <div className="cityNotFound">City Not Found</div>}

            {/* passing a created component and sent props here  */}
            {!isLoading && !cityNotFound && <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} lon={lon} humidityPer={humidityPer} windyPer={windyPer} />}
            <div className="copy-right">
                {error && <div className="error-message">{error}</div>}
                <h2>Designed By <span className="designer">HariPrasath</span> </h2>
            </div>
        </div>


    </>);
}

export default Weather;