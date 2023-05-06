import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
    id: number;
    name: string;
  }
  interface GamesResponse {
    count: number;
    results: Game[];
  }
  
const useFetch = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      apiClient
        .get<GamesResponse>("/games")
        .then((res) => setGames(res.data.results))
        .catch((err) => setError(err.message));
    });

    return {games, error};
}

export default useFetch;