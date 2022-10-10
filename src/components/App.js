import React, { useState } from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App(props) {
  const { location, forecasts } = props;
  const initialDate = forecasts[0].date;

  const [selectedDate] = useState(initialDate);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  console.log(selectedForecast);

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails forecast={forecasts[0]} />
    </div>
  );
}

// const App = ({ forecasts, location }) => {
//   const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
//   const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);

//   return (
//     <div className="weather-app">
//       <LocationDetails city={location.city} country={location.country} />
//       <ForecastSummaries forecasts={forecasts} />
//       <ForecastDetails forecast={forecasts[0]} />
//     </div>
//   )
// }

// function App(props) {
//   const { location, forecasts } = props;

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
