import React, { useState } from "react";
import "../styles/App.css";
import getForecast from "../data/api";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import SearchForm from "./SearchForm";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState();
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  // const handleForecastSelect = (date) => {
  //   setSelectedDate(date);
  // };

  // Run this when component loads...
  // useEffect(() => {
  //   getForecast("", setSelectedDate, setForecasts, setLocation);
  // }, []);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = () => {
    setSelectedDate();
    setErrorMessage(null);
    setLocation({ city: "", country: "" });
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  };

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
          selectedForecast={selectedForecast}
        />
      )}
    </div>
  );
}

export default App;
