import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { date, temperature, wind, humidity } = forecast;

  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-summary">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__max-temperature">
        Max Temperature: {temperature.max}&deg;C
      </div>
      <div className="forecast-details__min-temperature">
        Min Temperature: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">
        Humidity: {humidity}&#37;
      </div>
      <div className="forecast-details__wind-speed">
        Wind Speed: {wind.speed} mph
      </div>
      <div className="forecast-details__wind-direction">
        Wind Direction: {wind.direction}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
  }).isRequired,
};

export default ForecastDetails;
