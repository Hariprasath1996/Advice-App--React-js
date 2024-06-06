// import freezeIcon from "./assets/black-freeze.jpg"
// import snowIcon from "./assets/black-snow.jpg"
// import cloudIcon from "./assets/cloudy.png"
// import rainIcon from "./assets/rainy.jpg"
import { useState } from "react";
import sunIcon from "./assets/sunny.png"
// import thunderIcon from "./assets/thunder.jpg"
import { FaSearch } from "react-icons/fa";


const WeatherDetails = ({ icon , temp , city , country }) => {
    return (
        <>
            <div className="image">
                <img src={icon} style={{ width: 250, height: 250,  padding:10}} alt="image" />
            </div>
            <div>{temp}</div>
            <div>{city}</div>
            <div>{country}</div>
        </>
    )

}


const Weather = () => {
    // create state variables
    const [icon, setIcon] = useState( sunIcon )
    const [temp, setTemp] = useState( 0 )
    const [city, setCity] = useState( "ERODE" )
    const [country, setCountry] = useState( "IND" )
    
    return (<>
        {/* <h1>Weather application</h1> */}
        <div className="container">
            <div className="search-container">
                <input className="input-search" type="text" placeholder="Search City" />
                <FaSearch className="search-icon" />
            </div>
            <WeatherDetails icon={icon} temp={temp} city={city} country={country} />
        </div>
    </>);
}

export default Weather;