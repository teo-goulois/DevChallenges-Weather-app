import { WeatherType } from "../constants/types/Types";
import axios from "axios";

export const getcurrentLoc = async (setLoc: (json: WeatherType) => void) => {
  const position: any = await getPosition();
  const { latitude, longitude } = position.coords as {
    latitude: number;
    longitude: number;
  };
  const location = `${latitude}, ${longitude}`;
  const response = await axios({
    method: "post",
    url: "/api/posts",
    data: {
      location,
    },
  });
  setLoc(response.data.weatherDatas);
};

function getPosition() {
  // Simple wrapper
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
}
