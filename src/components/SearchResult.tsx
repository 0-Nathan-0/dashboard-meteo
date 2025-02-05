
type Props = {
  results: any;
};

export default function SearchResult({results}: Props) {

  if (!results) {
    return <div>Veuillez entrer une recherche.</div>;
  }

  if (
    !results ||
    !results.sys ||
    !results.main ||
    !results.weather ||
    !results.wind ||
    !results.clouds
  ) {
    return <div>ça existe pas poto</div>;
  }

  return (
    <div>
      <h2>Résultats de la recherche pour {results.name}</h2>
      <p>Température: {(results.main.temp - 273.15).toFixed(2)}°C</p>
      <p>Météo: {results.weather[0].description}</p>
      <p>Vent: {results.wind.speed} m/s</p>
      <p>Nuages: {results.clouds.all}%</p>
    </div>
  );
}
