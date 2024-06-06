// import freezeIcon from "./assets/black-freeze.jpg"
// import snowIcon from "./assets/black-snow.jpg"
// import cloudIcon from "./assets/cloudy.png"
// import rainIcon from "./assets/rainy.jpg"
import { useState } from "react";
import sunIcon from "./assets/sunny.png"
// import thunderIcon from "./assets/thunder.jpg"
import { FaSearch } from "react-icons/fa";




//  create a new component and passing props 
const WeatherDetails = ({ icon, temp, city, country ,lat,long }) => {
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
                    <span>latitude</span>
                    <span>{lat}</span>
                </div>
                <div className="longitude">
                    <span>longitude</span>
                    <span>{long}</span>
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
    const [lat,setLat]=useState(0)
    const [long,setLong]=useState(0)
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