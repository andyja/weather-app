// import axios from "axios";

// const allForecastUrl = "http://mcr-codes-weather-app.herokuapp.com/forecast";

// const getForecast = (setForecasts, setLocation, setSelectedDate) => {
//   return axios.get(allForecastUrl).then((response) => {
//     setForecasts(response.data.forecasts);
//     setLocation(response.data.location);
//     setSelectedDate(response.data.forecasts[0].date);
//   });
// };

// export default getForecast;

import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation
) => {
  let allForecastUrl = "http://mcr-codes-weather-app.herokuapp.com/forecast";

  if (searchText) {
    allForecastUrl += `?city=${searchText}`;
  }

  axios.get(allForecastUrl).then((response) => {
    setSelectedDate(response.data.forecasts[0].date);
    setForecasts(response.data.forecasts);
    setLocation(response.data.location);
  });
};

export default getForecast;
