const axios = require("axios");
const { ACCESS_KEY } = require("./keys");

const API_URL = "https://api.unsplash.com/";
const searchKey = "african";
async function getPhotos() {
  return axios.get(
    `${API_URL}/search/photos/?client_id=${ACCESS_KEY}&query=${searchKey}&page=1&per_page=8`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Accept-Version": "v1"
      }
    }
  );
}

async function searchPhotos(keyword) {
  return axios.get(
    `${API_URL}/search/photos/?client_id=${ACCESS_KEY}&query=${searchKey} ${keyword}&page=1&per_page=8`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Accept-Version": "v1"
      }
    }
  );
}

module.exports = {
  getPhotos,
  searchPhotos
};
