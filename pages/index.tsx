import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Forecast from "../components/forecast/Forecast";
import Hightlights from "../components/hightlights/Hightlights";
// Components
import TodayWeather from "../components/sidebar/TodayWeather";
import { WeatherType } from "../constants/types/Types";

type Props = {
  weatherDatas: WeatherType;
};

const Home: NextPage<Props> = ({ weatherDatas }) => {
  return (
    <div className="flex min-h-screen">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,
  maximum-scale=5"
        />

        <title>Weather App</title>
      </Head>

      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://devchallenges.io/"
      />

      <main className="overflow-x-hidden w-screen flex flex-col md:flex-row">
        <TodayWeather />
        <div className="bg-dark-blue md:w-[60%]">
          <Forecast />
          <Hightlights />
        </div>
        
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=London&aqi=no`
  );
  let json = await response.json();

  return {
    props: {
      weatherDatas: json as WeatherType,
    }, // will be passed to the page component as props
  };
};
