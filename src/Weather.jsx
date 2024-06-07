// import freezeIcon from "./assets/black-freeze.jpg"
// import snowIcon from "./assets/black-snow.jpg"
// import cloudIcon from "./assets/cloudy.png"
// import rainIcon from "./assets/rainy.jpg"
import { useState } from "react";
import sunIcon from "./assets/sunny.png"
// import thunderIcon from "./assets/thunder.jpg"
import { FaSearch } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { GiWindpump } from "react-icons/gi";





//  create a new component and passing props 
const WeatherDetails = ({ icon, temp, city, country, lat, long }) => {
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
                    <span className="long-value">{long}</span>
                </div>
            </div>
            <div className="cord-container">
                <div className="Humidity-container">
                    <div className="Humidity-icon">
                        <WiHumidity />
                    </div>
                    <div className="Humidity-data">
                        <div className="Humidity-percentage">
                            10%
                        </div>
                        <div className="Humidity-text">
                            HUMIDITY
                        </div>
                    </div>
                </div>
                <div className="Wind-container">
                    <div className="Wind-icon">
                        <GiWindpump />
                    </div>
                    <div className="Wind-data">
                        <div className="Wind-percentage">
                            10%
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
    // create state variables
    const [icon, setIcon] = useState(sunIcon)
    const [temp, setTemp] = useState(0)
    const [city, setCity] = useState("ERODE")
    const [country, setCountry] = useState("IND")
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)
    return (<>
        {/* <h1>Weather application</h1> */}
        <div className="container">
            <div className="search-container">
                <input className="input-search" type="text" placeholder="Search City" />
                <FaSearch className="search-icon" />
            </div>
            {/* passing a created component and sent props here  */}
            <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} long={long} />
        </div>

    </>);
}

export default Weather;