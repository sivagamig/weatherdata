import React from "react";
import "../components/WeatherDetails.css";

function WeatherDetails({ selectplace }) {
  return (
    <>
      {selectplace &&
        selectplace.map((x, i) => {
          let {
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
          } = x;
          return (

            <div className="card" >
              <img
                className="cardimage"
                src={icon.replace("//", "https://")}
                alt="Avatar"

              />
              <div className="container">
                <h4>
                  <b>
                    {name}<br />{country}
                  </b>
                </h4>
                <p>
                  Weather : {temp_c}&deg; {weatherType}
                </p>
                <p>
                  Rain : <i className={"wi wi-raindrop"}></i> {precip_mm}{" "}
                </p>
                <p>
                  Humidity : <i className={"wi wi-humidity"}></i> {humidity}{" "}
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default WeatherDetails;
