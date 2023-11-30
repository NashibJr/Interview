import axios from "axios";

const client = axios.create({
  baseURL:
    "https://interview-backend-production-75c4.up.railway.app/api/destinations",
});

export default client;
