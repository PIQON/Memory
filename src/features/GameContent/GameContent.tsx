import { Fragment, useEffect } from 'react';
import { Wrapper } from '../UI/Wrapper/Wrapper';
import { GameBoard } from './GameBoard/GameBoard';
import { GameHeader } from './GameHeader/GameHeader';
import { GameStatistics } from './GameStatistics/GameStatistics';
import { useGameContext } from './GameContext/useGameContext';
import { Modal } from '../UI/Modal/Modal';
import { GameOver } from './GameOver/GameOver';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router';

export const GameContent = () => {
  const { matchedCards } = useGameContext();
  const navigate = useNavigate();

  const { cards } = useSelector((state: RootState) => state.game);

  useEffect(() => {
    cards.length === 0 && navigate('/');
  }, []);

  return (
    <Fragment>
      {matchedCards.length === cards.length && (
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
