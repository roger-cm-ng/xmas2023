import {
  Box, Fade, Button, Popover,
  PopoverTrigger, PopoverContent, PopoverArrow, PopoverBody
} from '@chakra-ui/react';
import {
  useEffect, useState
} from 'react';
import {
  AnimateCC, GetAnimationObjectParameter
} from 'react-adobe-animate';
import { useStore } from '../../stores';
import { observer } from 'mobx-react';
import { AnimationEnum } from '../stage/stage.types';
import { getQueryParam } from '../../utils';

export const Chimney = observer(() => {
  const [, getAnimationObject] = useState<GetAnimationObjectParameter|null>(null);
  const [showText, setShowText] = useState(false);
  const { stageStore } = useStore();
  const fromFamily = getQueryParam('from');

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 2000);
  }, []);

  const playAgainHandler = () => {
    window.location.reload();
  };

  return (
    <>
      <Fade in={showText}>
        <Box
          position={'absolute'}
          top={'10%'}
          width={'100%'}
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
      <AnimateCC
        animationName={stageStore.animation}
        getAnimationObject={getAnimationObject}
      />
    </>
  );
});
