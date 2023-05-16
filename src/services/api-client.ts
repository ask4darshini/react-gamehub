import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: 'a91172caea9148d4b613b6eae7d1e818',
  },
});
