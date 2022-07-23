import axios from "axios";
import React, { useContext } from "react";
// Icons
import { RightArrowIcon } from "../../constants/icons/Icons";
// Types
import { WeatherSearchType } from "../../constants/types/Types";
// Context
import { WeatherContext } from "../../context/WeatherContext";

type Props = {
  item: WeatherSearchType;
};
const SearchResultButton = ({ item }: Props) => {
  const { setWeatherInfos, setSearchBarIsOpen } = useContext(WeatherContext);

  const handleClick = async () => {
    const location = `${item.name}, ${item.country}`;
    const response = await axios({
      method: "post",
      url: "/api/posts",
      data: {
        location,
      },
    });
    setWeatherInfos(response.data.weatherDatas);
    setSearchBarIsOpen(false);
  };
  return (
    <button
      onClick={handleClick}
      className="border border-blue hover:border hover:border-gray-border flex items-center justify-between w-full px-2 py-5 my-2"
    >
      <p className="text-primary">{`${item.name}, ${item.country} `}</p>
      <div className="text-gray-border">
        <RightArrowIcon />
      </div>
    </button>
  );
};

export default SearchResultButton;
