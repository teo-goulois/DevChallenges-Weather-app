import React, { useContext, useState } from "react";
// Context
import { WeatherContext } from "../../context/WeatherContext";
// Component
import Item from "./Item";
import CelciusButton from "../buttons/CelciusButton";

const Forecast = () => {
  const { weatherInfos } = useContext(WeatherContext);

  return (
    <div className=" flex flex-col items-center justify-center md:h-[35%]">
      <CelciusButton />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-5">
        {weatherInfos?.forecast.forecastday.map((item, index) => {
          return <Item key={index} weather={item} />;
        })}
      </div>
    </div>
  );
};

export default Forecast;
