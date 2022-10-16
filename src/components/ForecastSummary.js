import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import ForecastDetails from "./ForecastDetails";

function ForecastSummary(props) {
  const {
    date,
    description,
    icon,
    temperature,
    forecast,
    handleMoreInfo,
    showDetails,
  } = props;

  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon.toString()} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button type="button" onClick={() => handleMoreInfo()}>
        More details
      </button>
      {showDetails && <ForecastDetails forecast={forecast} />}
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
  }).isRequired,
  handleMoreInfo: PropTypes.func.isRequired,
  showDetails: PropTypes.bool.isRequired,
};
export default ForecastSummary;
