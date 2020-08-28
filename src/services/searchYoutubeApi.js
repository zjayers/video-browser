import axios from "axios";

const API_KEY = "AIzaSyBPADkmooqsrn4t0IGMOKt96vLRgZYZCV4";

function searchYoutubeApi(searchTerm) {
  return axios.get("https://www.googleapis.com/youtube/v3/search", {
    params: {
      key: API_KEY,
      type: "video",
      part: "snippet",
      q: searchTerm,
    },
  });
}

export { searchYoutubeApi };
