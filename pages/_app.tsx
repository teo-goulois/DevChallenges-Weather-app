import "../styles/globals.css";
import type { AppProps } from "next/app";
// Provider
import { WeatherProvider } from "../context/WeatherContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WeatherProvider>
      <Component {...pageProps} />
    </WeatherProvider>
  );
}

export default MyApp;
