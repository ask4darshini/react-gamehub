import { Text } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";

const GameGrid = () => {
    const {games, error} = useFetch()
  
  return (
    <>
    {error && <Text>{error}</Text>}
   <ul>
    {games.map(game => <li key={game.id}>{game.name}</li>)}
   </ul>
   </>
  );
};

export default GameGrid;
