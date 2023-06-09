import axios from "axios";
import "../App.css";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "f33a484cf794d08d0148764789aaba32";
const fetch = async (query) => {
  const response = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return response.data;
};
export default fetch;
