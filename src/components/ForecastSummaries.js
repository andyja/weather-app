// import React from "react";
// import PropTypes from "prop-types;";

// function App({ location, forecasts }) {
//   return (
//     <div className="forecast">
//       <ForecastSummaries forecasts={forecasts} />
//     </div>
//   );
// }
// ForecastSummaries.propTypes = {
//   city: PropTypes.string.isRequired,
//   country: PropTypes.string.isRequired,
// };

// export default ForecastSummaries;

import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

function ForecastSummaries({ forecasts }) {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature}
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
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
};

export default ForecastSummaries;
