import axios from "axios";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
// Types
import { WeatherType } from "../constants/types/Types";
// Hooks
import { getcurrentLoc } from "../hooks/Hooks";

type ContextProps = {
  searchBarIsOpen: boolean;
  setSearchBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  weatherInfos: WeatherType | undefined;
  tempIsCelcius: boolean;
  setTempIsCelcius: React.Dispatch<SetStateAction<boolean>>;
  setWeatherInfos: Dispatch<SetStateAction<WeatherType | undefined>>;
};

const initialState = {
  searchBarIsOpen: false,
  setSearchBarIsOpen: () => {},
  weatherInfos: undefined,
  tempIsCelcius: true,
  setTempIsCelcius: () => {},
  setWeatherInfos: () => {},
};

export const WeatherContext = createContext<ContextProps>(initialState);

type ProviderProps = {
  children: React.ReactNode;
};

export const WeatherProvider = ({ children }: ProviderProps) => {
  const [searchBarIsOpen, setSearchBarIsOpen] = useState<boolean>(false);
  const [weatherInfos, setWeatherInfos] = useState<WeatherType | undefined>();
  const [tempIsCelcius, setTempIsCelcius] = useState<boolean>(true);

  useEffect(() => {
    if (navigator.geolocation) {
      console.log("test");
      if (navigator.permissions) {
        navigator.permissions
          .query({
            name: "geolocation",
          })
          .then((permission) => {
            permission.state !== "granted" && getDefaultWeatherInfo();
          });
      }

      getcurrentLoc(setWeatherInfos);
    } else {
      console.log("errrrrr");

      getDefaultWeatherInfo();
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  const getDefaultWeatherInfo = async () => {
    const response = await axios({
      method: "post",
      url: "/api/posts",
      data: {
        location: "Paris france",
      },
    });
    setWeatherInfos(response.data.weatherDatas);
  };

  const value = {
    searchBarIsOpen,
    setSearchBarIsOpen,
    weatherInfos,
    tempIsCelcius,
    setTempIsCelcius,
    setWeatherInfos,
  };
  return (
    <WeatherContext.Provider value={value}>
      {" "}
      {children}{" "}
    </WeatherContext.Provider>
  );
};
