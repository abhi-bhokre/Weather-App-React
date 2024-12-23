import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";


export default function WeatherApp(){

    const [weatherInfo , setWeatherInfo] = useState({
     city : "Delhi",   
     feelsLike:18.37,
     humidity:52,
     temp:19.05,
     tempMax:19.05,
     tempMin:19.05,
     weather: "haze",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App By Abhi</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}