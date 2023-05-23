import { Fragment } from 'react';
import { Wrapper } from '../UI/Wrapper/Wrapper';
import { GameBoard } from './GameBoard/GameBoard';
import { GameHeader } from './GameHeader/GameHeader';
import { GameStatistics } from './GameStatistics/GameStatistics';
import { useGameContext } from './GameContext/useGameContext';
import { Modal } from '../UI/Modal/Modal';
import { GameOver } from './GameOver/GameOver';

export const GameContent = () => {
  const { matchedCards, data } = useGameContext();

  return (
    <Fragment>
      {matchedCards.length === data.length && (
        <Modal>
          <GameOver />
        </Modal>
      )}
      <Wrapper maxWidth="70rem">
        <GameHeader />
      </Wrapper>
      <Wrapper maxWidth="36rem">
        <GameBoard />
      </Wrapper>
      <Wrapper maxWidth="45rem">
        <GameStatistics />
      </Wrapper>
    </Fragment>
  );
};
