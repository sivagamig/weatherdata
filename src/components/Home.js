import React, { useState } from "react";
import "../components/Home.css";
import WeatherDetails from '../components/WeatherDetails';

function Home() {
    const [currentplace, setCurrentplace] = useState("");
    /*  const [selectplace, setSelectplace] = useState(""); */

    const [placeList, setPlaceList] = useState([]);

    const addPlaceList = async () => {
        try {
            let url = `https://api.weatherapi.com/v1/current.json?key=dd43275074d0414ab08201422220604&q=${currentplace}&aqi=yes`;
            let res = await fetch(url);
            let data = await res.json();
            if (data["error"]) {
                setCurrentplace("");
                alert(data["error"]['message'])
                return false
            }
            if (!data["error"]) {
                const { temp_c, humidity, pressure_in, precip_mm } = data.current;
                const { text: weatherType, icon } = data.current.condition;
                const { name } = data.location;
                const { wind_mph } = data.current;
                const { country, localtime } = data.location;

                const myNewWeatherInfo = {
                    temp_c,
                    humidity,
                    pressure_in,
                    precip_mm,
                    weatherType,
                    icon,
                    name,
                    wind_mph,
                    country,
                    localtime,
                };
                setPlaceList([...placeList, { ...myNewWeatherInfo, place: currentplace }]);
                setCurrentplace("");
            }
            /*  ,key: Date.now() */
        } catch (e) {
            console.log(e.message);
        }
        setCurrentplace("");
    };


    const deletePlaceList = (i) => {
        let tempPlaceArr = JSON.parse(JSON.stringify(placeList))
        console.log("999999999", tempPlaceArr)
        tempPlaceArr[i] = null
        setPlaceList(tempPlaceArr.filter(Boolean))
    };

    const onChangehandler = (e) => {
        setCurrentplace(e.target.value);
    };

    return (
        <>
            <div className="welcometitle">
                <h3 style={{ color: "white" }}>Welcome To The Weather App {localStorage.getItem("userName")}</h3>
            </div>

            <div className="wrapper">
                {/* Inputfield */}
                <div className="inputWrapper">
                    <input
                        autoFocus="autofocus"
                        value={currentplace}
                        onChange={onChangehandler}
                        disabled={placeList.length === 5}
                    />

                    <button disabled={placeList.length === 5} onClick={addPlaceList}>+</button>
                </div>

                <div>
                    {placeList.map((placeObj, i) => {
                        return (
                            <div style={{textTransform: 'capitalize'}} className="placeList" key={i}>

                                <p><b>{placeObj.place}</b></p>

                                <button onClick={() => deletePlaceList(i)}>-</button>

                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="carddetails">
                <WeatherDetails selectplace={placeList} />
            </div>
        </>
    );
}

export default Home;