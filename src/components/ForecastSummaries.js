import React, { useState } from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

function ForecastSummaries({ forecasts }) {
  const [showIndex, setShowIndex] = useState();

  const handleMoreInfo = (index) => {
    setShowIndex(index);
  };

  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast, i) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature}
          forecast={forecast}
          handleMoreInfo={() => handleMoreInfo(i)}
          showDetails={showIndex === i}
        />
      ))}
    </div>
  );
}

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.number.isRequired,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
};

export default ForecastSummaries;
