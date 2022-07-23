import React, { useContext } from "react";
// context
import { WeatherContext } from "../../context/WeatherContext";

const CelciusButton = () => {
  const { tempIsCelcius, setTempIsCelcius } = useContext(WeatherContext);
  return (
    <div className="md:flex items-center ml-auto mr-4 hidden ">
      <button
        onClick={() => setTempIsCelcius(true)}
        className={`${
          tempIsCelcius
            ? "bg-primary text-[#110E3C] "
            : "bg-dark-gray text-primary"
        } text-lg font-bold text-center rounded-full w-9 h-9`}
      >
        °C
      </button>
      <button
        onClick={() => setTempIsCelcius(false)}
        className={`${
          !tempIsCelcius
            ? "bg-primary text-[#110E3C] "
            : "bg-dark-gray text-primary"
        } text-lg font-bold text-center rounded-full w-9 h-9 ml-2`}
      >
        °F
      </button>
    </div>
  );
};

export default CelciusButton;
