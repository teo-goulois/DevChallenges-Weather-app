import React, { Dispatch, SetStateAction } from "react";
// Icons
import { CurrentLocationIcon } from "../../constants/icons/Icons";
// Types
import { WeatherType } from "../../constants/types/Types";
// Hooks
import { getcurrentLoc } from "../../hooks/Hooks";

type Props = {
  setWeatherInfos: Dispatch<SetStateAction<WeatherType | undefined>>;
};
const Localisation = ({ setWeatherInfos }: Props) => {
  const handleClick = () => {
    getcurrentLoc(setWeatherInfos);
  };
  return (
    <button
      onClick={handleClick}
      className="bg-[#6E707A4D] p-2 rounded-full text-primary"
    >
      <CurrentLocationIcon width={"22px"} height={"22px"} />
    </button>
  );
};

export default Localisation;
