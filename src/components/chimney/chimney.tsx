import {
  Box, Fade, Button, Popover,
  PopoverTrigger, PopoverContent, PopoverArrow, PopoverBody
} from '@chakra-ui/react';
import {
  useEffect, useState, useRef
} from 'react';
import { useStore } from '../../stores';
import { observer } from 'mobx-react';
import { AnimationEnum } from '../stage/stage.types';
import { getQueryParam } from '../../utils';
import stuck from './stuck.json';
import unstuck from './unstuck.json';
import Lottie, { LottieRef } from 'lottie-react';

export const Chimney = observer(() => {
  const [showText, setShowText] = useState(false);
  const { stageStore } = useStore();
  const fromFamily = getQueryParam('from');
  const lottieRef:LottieRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 2000);
  }, []);

  const playAgainHandler = () => {
    window.location.reload();
  };
  const repeatAnimation = () => {
    if (stageStore.animation === AnimationEnum.STUCK) {
      lottieRef.current?.goToAndPlay(80, true);
    }
  };

  return (
    <>
      <Fade in={showText}>
        <Box
          position={'absolute'}
          top={'10%'}
          width={'100%'}
          zIndex={1000}
        >
          <Box
            color={'white'}
            fontSize={'2.4em'}
            width={'100%'}
            textAlign={'center'}
          >
            Have a very
          </Box>
          <Box
            color={'white'}
            fontSize={'2.4em'}
            width={'100%'}
            textAlign={'center'}
            marginBottom={'0.8em'}
          >
            Merry Christmas
          </Box>
          <Box
            color={'white'}
            fontSize={'0.8em'}
            width={'100%'}
            textAlign={'center'}
            marginBottom={'2em'}
            display={fromFamily ? 'block' : 'none'}
          >
            From: Marcus + Janis + Roger
          </Box>
          <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
          >
            <Button
              onClick={playAgainHandler}
              colorScheme='red'
              size={'lg'}
              fontSize={'1.6em'}
              padding={'1em'}
              letterSpacing={'0.1em'}
              border={'2px solid white'}
            >
              RESTART
            </Button>
          </Box>
        </Box>
      </Fade>
      <Popover
        isOpen={showText && stageStore.animation === AnimationEnum.STUCK}
        placement='top'
      >
        <PopoverTrigger>
          <Box
            position={'absolute'}
            width={'100%'}
            height={'10px'}
            bottom={0}
          />
        </PopoverTrigger>
        <PopoverContent
          width={'unset'}
          maxWidth={'unset'}
        >
          <PopoverArrow />
          <PopoverBody
            textAlign={'center'}
          >
            Santa, you're so fat!
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Lottie
        lottieRef={lottieRef}
        animationData={stageStore.animation === AnimationEnum.STUCK ? stuck : unstuck}
        loop={false}
        onComplete={repeatAnimation}
      />
    </>
  );
});
