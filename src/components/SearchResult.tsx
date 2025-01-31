import { useState } from "react";

export default async function SearchResult(searched: string) {
  const [results, setResults] = useState<string[]>([]);

  const handleSearchSubmit = async (searched: string) => {
    if (searched) {
      const APIkey = "82c485cf126bc203fa9237948e6f79a9";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searched}&appid=${APIkey}&lang=fr`
      );
      const data = await response.json();
      setResults(data);
    }
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  if (
    !results ||
    !results.sys ||
    !results.main ||
    !results.weather ||
    !results.wind ||
    !results.clouds
  ) {
    return <div>YAAAAAAAAAA PAAAAAAAAAAAAS</div>;
  }

  return (
    <div>
      <h2>
        Météo dans {results.name}, {results.sys.country}
      </h2>
      <p>{capitalizeFirstLetter(results.weather[0].description)}</p>
      <p>Température: {(results.main.temp - 273.15).toFixed(2)} °C</p>
      <p>Ressentie: {(results.main.feels_like - 273.15).toFixed(2)} °C</p>
      <p>Vitesse du vent: {results.wind.speed} m/s</p>
      <p>Humidité: {results.main.humidity}%</p>
      <p>Pression: {results.main.pressure} hPa</p>
      <p>Visibilité: {results.visibility} mètres</p>
      <p>Couverture nuageuse: {results.clouds.all}%</p>
      {results.rain && <p>Pluie (dernière heure): {results.rain["1h"]} mm</p>}
    </div>
  );
}
