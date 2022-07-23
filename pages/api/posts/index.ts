// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { weatherApi } from "../../../constants/api/weatherApi";
import { WeatherType } from "../../../constants/types/Types";

type Data = {
  weatherDatas: WeatherType;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { location } = req.body;
    
    // Process a GET request
    const response = await weatherApi.get("forecast.json", {
      params: {
        key: process.env.API_KEY,
        q: location,
        days: 7,
      },
    });
    res.status(200).json({ weatherDatas: response.data });
  } else {
    // Handle any other HTTP method
  }
}
