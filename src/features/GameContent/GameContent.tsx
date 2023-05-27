import { Fragment, useEffect } from 'react';
import { Wrapper } from '../UI/Wrapper/Wrapper';
import { GameBoard } from './GameBoard/GameBoard';
import { GameHeader } from './GameHeader/GameHeader';
import { GameStatistics } from './GameStatistics/GameStatistics';
import { Modal } from '../UI/Modal/Modal';
import { GameOver } from './GameOver/GameOver';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router';
import {
  cardMatches,
  changeActivePlayer,
  changePlayerStatistics,
  clearFlippedCards,
  currentGameWinner,
  matchedCardsChange,
} from '../../store/slices/game/gameSlice';

export const GameContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cards, flippedCards, matchedCards } = useSelector(
    (state: RootState) => state.game
  );

  useEffect(() => {
    cards.length === 0 && navigate('/');
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.value === secondCard.value) {
        setTimeout(() => {
          dispatch(matchedCardsChange());
          dispatch(changePlayerStatistics({ matchedCard: true }));
          dispatch(currentGameWinner());
          dispatch(clearFlippedCards());
        }, 1000);
      } else {
        setTimeout(() => {
          dispatch(cardMatches());
          dispatch(changePlayerStatistics({ matchedCard: false }));
          dispatch(changeActivePlayer());
          dispatch(clearFlippedCards());
          dispatch(currentGameWinner());
        }, 1000);
      }
    }
  }, [flippedCards]);

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
