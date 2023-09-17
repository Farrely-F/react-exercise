// api.js

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.jsonbin.io/v3", // Replace with your API base URL
});

export const getShoes = () => instance.get("/b/6503f8478d92e126ae6ccf2d");
// Add more functions for other API endpoints as needed
