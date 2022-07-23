import React, { useContext } from "react";
import Image from "next/image";
// component
import DateComponent from "../sidebar/Date";
// type
import { ForecastType } from "../../constants/types/Types";
// Context
import { WeatherContext } from "../../context/WeatherContext";

type Props = {
  weather: ForecastType;
};

const Item = ({ weather }: Props) => {
  const { tempIsCelcius } = useContext(WeatherContext);
  return (
    <div className="bg-blue min-w-[115px] w-fit p-4 ">
      {/* day */}
      <h2 className="font-medium text-primary">
        <DateComponent date={weather.date} />
      </h2>
      {/* image */}
      <div className="relative h-[63px] flex items-center justify-center ">
        <Image
          className="object-contain"
          layout="fill"
          /* width={"56.44px"}
          height={"62px"} */
          src={`http:${weather.day.condition.icon}`}
          alt={weather.day.condition.text}
        />
      </div>
      {/* hotest and coolest temperature */}
      <div className="flex items-center justify-between pt-4">
        <h2 className="font-medium text-primary">
          {tempIsCelcius
            ? `${Math.round(weather.day.maxtemp_c)}°C`
            : `${Math.round(weather.day.maxtemp_f)}°F`}
        </h2>
        <h2 className="font-medium text-primary">
          {tempIsCelcius
            ? `${Math.round(weather.day.mintemp_c)}°C`
            : `${Math.round(weather.day.mintemp_f)}°F`}
        </h2>
      </div>
    </div>
  );
};

export default Item;
