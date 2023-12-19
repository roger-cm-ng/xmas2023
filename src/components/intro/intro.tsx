import {
  Box, Button
} from '@chakra-ui/react';
import Lottie from "lottie-react";
import { useStore } from '../../stores';
import { StageEnum } from '../stage/stage.types';
import introAnimation from './intro-animation.json';

export const Intro = () => {
  const { stageStore } = useStore();

  return (
    <>
      <Box
        position={'absolute'}
        top={'10%'}
        width={'100%'}
        zIndex={100}
      >
        <Box
          color={'red'}
          fontSize={'3em'}
          textAlign={'center'}
          lineHeight={'1em'}
          marginBottom={'0.1em'}
        >
          Don't feed
        </Box>
        <Box
          color={'red'}
          fontSize={'4em'}
          textAlign={'center'}
          lineHeight={'1em'}
        >
          Santa!
        </Box>
      </Box>
      <Box
        position={'absolute'}
        bottom={'10%'}
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        zIndex={110}
      >
        <Button
          onClick={() => stageStore.setCurrentStage(StageEnum.GAME)}
          colorScheme='red'
          size={'lg'}
          fontSize={'1.6em'}
          padding={'1em'}
          letterSpacing={'0.1em'}
          border={'2px solid white'}
        >
          PLAY
        </Button>
      </Box>
      <Lottie animationData={introAnimation} />
    </>
  );
};
