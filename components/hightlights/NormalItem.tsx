import React from "react";
// Icons
import { SensArrowIcon } from "../../constants/icons/Icons";

type Props = {
  title: string;
  number: number | undefined;
  label: string;
  windDirection?: {
    wind_degree: number | undefined;
    wind_dir: string | undefined;
  };
};

const NormalItem = ({ title, number, label, windDirection }: Props) => {
  return (
    <div className="bg-blue p-4 w-full flex flex-col items-center my-4">
      {/* title */}
      <h2 className="text-base text-primary font-medium ">{title} </h2>
      {/* data */}
      <h1 className="text-[64px] text-primary font-bold">
        {number}
        <span
          className={`${
            (title === "Visibility" || title === "Air Pressure") && "pl-4"
          } text-4xl font-medium`}
        >
          {label}
        </span>{" "}
      </h1>
      {/* additional info */}
      {/* wind direction */}
      {title === "Wind status" && (
        <div className="flex items-center">
          <div
            style={{ transform: `rotate(${windDirection?.wind_degree})` }}
            className="text-primary bg-dark-gray p-1 rounded-full flex items-center justify-center"
          >
            <SensArrowIcon />
          </div>
          <p className="uppercase text-primary font-medium text-sm pl-4">
            {windDirection?.wind_dir}
          </p>
        </div>
      )}
      {/* humidity */}
      {title === "Humidity" && (
        <div className="w-3/4">
          <div className="flex items-center text-secondary justify-between">
            <p>0</p>
            <p>50</p>
            <p>100</p>
          </div>
          <div className="relative h-2 bg-primary rounded-[80px] overflow-hidden">
            <div
              style={{ width: `${number}%` }}
              className={`h-2 bg-yellow z-20`}
            ></div>
          </div>
          <p className="text-secondary float-right">%</p>
        </div>
      )}
    </div>
  );
};

export default NormalItem;
