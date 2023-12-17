/* eslint-disable react-refresh/only-export-components */
import {
  createContext, useContext
} from 'react';

import { GameStore } from './phaser/objects/game-store';
import { StageStore } from './components/stage/stage-store';

const store = {
  gameStore: new GameStore(),
  stageStore: new StageStore()
};

export const StoreContext = createContext(store);

export const useStore = () => useContext<typeof store>(StoreContext);

export default store;
