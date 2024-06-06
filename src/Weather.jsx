// import freezeIcon from "./assets/black-freeze.jpg"
// import snowIcon from "./assets/black-snow.jpg"
// import cloudIcon from "./assets/cloudy.png"
// import rainIcon from "./assets/rainy.jpg"
// import sunIcon from "./assets/sunny.jpg"
// import thunderIcon from "./assets/thunder.jpg"
import { FaSearch } from "react-icons/fa";





const Weather = () => {
    return (<>
{/* <h1>Weather application</h1> */}
<div className="container">
    <div className="search-container">
        <input className="input-search" type="text" placeholder="Search City"/>
        <FaSearch className="search-icon" />
    </div>
</div>
    </>);
}

export default Weather;