import React from "react";
type Props = {
  isCelcius: boolean;
  tempC: number | undefined;
  tempF: number | undefined;
};
const Temperature = ({ isCelcius, tempC, tempF }: Props) => {
  return (
    <h1 className="font-medium text-[144px] text-primary">
      {isCelcius ? tempC : tempF}
      <span className="font-thin text-5xl text-secondary">
        {isCelcius ? "°C" : "°F"}
      </span>{" "}
    </h1>
  );
};

export default Temperature;
