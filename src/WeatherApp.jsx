import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"


export default function WeatherApp() {
    let [weatherInfo,setWeatherInfo]=useState({
        city:"Nagpur",
        temp:30.01,
        tempMin:30.01,
        tempMax:30.01,
        humidity:70,
        feelsLike:35.06,
        weather:"haze",
    });

    let updateInfo=(newInfo)=> {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}