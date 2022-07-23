// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { weatherApi } from "../../../constants/api/weatherApi";
import { WeatherSearchType } from "../../../constants/types/Types";
// SEARCH CITY
type Data = {
  searchResults: WeatherSearchType[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { name } = req.query;

    const response = await weatherApi.get("search.json", {
      params: {
        key: process.env.API_KEY,
        q: name,
      },
    });
    res.status(200).json({ searchResults: response.data });
  } else {
  }
}
