import React from "react";
import PropTypes from "prop-types";

function ForecastSummary(props) {
  const { date, description, icon, temperature } = props;

  return (
    <div className="forecast-summary">
      <p className="forecast-summary__date">{date}</p>
      <p className="forecast-summary__icon"> {icon}</p>
      <p className="forecast-summmary__temperature">{temperature.max}&deg;C</p>
      <p className="forecast-summary__description">{description}</p>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
export default ForecastSummary;
