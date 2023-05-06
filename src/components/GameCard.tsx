import { Game } from '../hooks/useFetch'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import GameScore from './GameScore'
import getCroppedImageUrl from '../services/image-url'

interface Props{
    game: Game

}
const GameCard = ({game} : Props) => {
  return (
    <Card >
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
      <HStack justifyContent='space-between'>
       <PlatformIconList platforms={game.parent_platforms.map(p=> p.platform)}/>
       <GameScore score={game.metacritic}/>
       </HStack>
        </CardBody>
    </Card>

  )
}

export default GameCard;
