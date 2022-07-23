import React, { useContext } from "react";
// Context
import { WeatherContext } from "../../context/WeatherContext";
// Components
import NormalItem from "./NormalItem";

const Hightlights = () => {
  const { weatherInfos } = useContext(WeatherContext);

  return (
    <div className="px-4 md:h-[65%] relative">
      <h1 className="text-primary text-2xl font-bold">Today's Hightlights</h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[90%] gap-4 pb-4 md:pd-0">
          <NormalItem
            title="Wind status"
            label="mph"
            number={weatherInfos?.current.wind_mph}
            windDirection={{
              wind_dir: weatherInfos?.current.wind_dir,
              wind_degree: weatherInfos?.current.wind_degree,
            }}
          />
          <NormalItem
            title="Humidity"
            label="%"
            number={weatherInfos?.current.humidity}
          />
          <NormalItem
            title="Visibility"
            label="miles"
            number={weatherInfos?.current.vis_miles}
          />
          <NormalItem
            title="Air Pressure"
            label="mb"
            number={weatherInfos?.current.pressure_mb}
          />
        </div>
        <p className="absolute bottom-2 text-[#A9A9A9] text-sm font-medium text-center">
          created by <span className="font-bold underline">téo goulois</span> -
          devChallenges.io
        </p>
      </div>
    </div>
  );
};

export default Hightlights;
