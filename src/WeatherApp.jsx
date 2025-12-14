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

    const getBackgroundColor = (info) => {
        if (info.humidity > 80) return "#DCEEFF"; // Rain
        if (info.temp > 25) return "#FFE6B3";     // Hot
        if (info.temp <= 15) return "#EAF3FF";    // Cold
        return "#F5F5F5";                         // Default
    };


    return (
        <div style={{textAlign:"center",
            backgroundColor: getBackgroundColor(weatherInfo),
            minHeight: "100vh",
            transition: "background-color 0.4s ease-in-out",
        }}>
            <h2 className="mt-auto mb-3">Weather App </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}