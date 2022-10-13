/* eslint-disable-next-line no-console */
import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  let allForecastUrl = "http://mcr-codes-weather-app.herokuapp.com/forecast";

  if (searchText) {
    allForecastUrl += `?city=${searchText}`;
  }

  axios
    .get(allForecastUrl)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("Location not in database, please try another city");
        console.error("Location not found, please try again", error);
      }
      if (status === 500) {
        setErrorMessage("Server not found, try another time");
        console.error("Server error", error);
      }
    });
};

export default getForecast;
