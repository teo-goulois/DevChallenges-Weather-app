import React, { useContext, useMemo } from "react";

// Components
import Localisation from "../buttons/Localisation";
import SearchForPlace from "../buttons/SearchForPlace";
import SearchModal from "../searchBar/SearchModal";
import Temperature from "./Temperature";
import DateComponent from "./Date";
import ShowWeather from "./ShowWeather";
// Context
import { WeatherContext } from "../../context/WeatherContext";
// Icons
import { LocationIcon } from "../../constants/icons/Icons";

const TodayWeather = () => {
  const { setSearchBarIsOpen, weatherInfos, tempIsCelcius, setWeatherInfos } =
    useContext(WeatherContext);

  return (
    <div className="h-screen w-full bg-blue md:w-[40%] ">
      {/* search modal */}
      {<SearchModal />}
      {/* navbar */}
      <div className="realtive z-10 flex items-center justify-between px-2 py-4 overflow-hidden">
        <SearchForPlace setIsOpen={setSearchBarIsOpen} />
        <Localisation setWeatherInfos={setWeatherInfos} />
      </div>
      {/* images */}
      <div className="h-[35%] w-full">
        <ShowWeather condition={weatherInfos?.current.condition} />
      </div>
      {/* infos */}
      <div className="flex flex-col justify-around items-center h-[55%] ">
        {/* degrees */}
        <Temperature
          isCelcius={tempIsCelcius}
          tempC={weatherInfos?.current.temp_c}
          tempF={weatherInfos?.current.temp_f}
        />
        {/* title */}
        <h2 className="text-secondary text-4xl font-semibold ">
          {weatherInfos?.current.condition.text}
        </h2>
        {/* date */}
        <p className="text-secondary text-lg font-medium">
          Today • <DateComponent date={weatherInfos?.current.last_updated} />
        </p>
        {/* location */}
        <div className="flex items-center text-secondary text-lg font-semibold  ">
          <LocationIcon />
          <p>{weatherInfos?.location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default TodayWeather;
