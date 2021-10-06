import axios from "axios";

const API__KEY = "AIzaSyBRhAjJVQRMiYoATxIuaE9ye5Wexhk9rdE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    order: "date",
    chart: "mostPopular",
    regionCode: "US",
    key: API__KEY,
  },
});
