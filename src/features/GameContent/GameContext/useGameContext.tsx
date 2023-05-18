import { useContextWithoutNull } from '../../../hooks/useContextWithoutNull';
import { GameContext } from './GameContext';

export const useGameContext = () => {
  const gameContext = useContextWithoutNull(GameContext);
  return gameContext;
};
