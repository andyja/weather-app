import React, { useState } from "react";
import "../styles/App.css";
import getForecast from "../data/api";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import SearchForm from "./SearchForm";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [, setSelectedDate] = useState();
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = (searchTerm) => {
    setSelectedDate();
    setErrorMessage(null);
    setLocation({ city: "", country: "" });
    getForecast(
      searchTerm,
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
          // selectedForecast={selectedForecast}
        />
      )}
    </div>
  );
}

export default App;
