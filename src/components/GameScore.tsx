import { Badge } from '@chakra-ui/react';
import React from 'react'
interface Props{
    score: number;
}
const GameScore = ({score}: Props) => {
  return (
   <Badge fontSize='14px'>{score}</Badge>
  )
}

export default GameScore
