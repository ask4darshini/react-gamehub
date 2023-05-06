import React from 'react';
import {Text} from '@chakra-ui/react';
import {Platform} from '../hooks/useFetch';

interface Props {
    platforms: Platform[]
}
const PlatformIconList = ({platforms} : Props) => {
  return (
  <> 
                  {platforms.map((platform) => <Text>{platform.name}</Text>)}

                  </>
  )
}

export default PlatformIconList
