import { createContext, useEffect, useState } from 'react';
import { ChildrenRoot } from '../../../types/shared';

import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

type PlayersStatistics = {
  player: number;
  matches: number;
  moves: number;
};

type GameContextData = {
  data: any[];
  matchedCards: any[];
  flipCard: (id: number) => void;
  statistics: PlayersStatistics[];
  activePlayer: number;
  currentWinner: PlayersStatistics | null;
  resetGame: () => void;
};

export const GameContext = createContext<GameContextData | null>(null);

export const GameContextProvider = ({ children }: ChildrenRoot) => {
  const { settings } = useSelector((state: RootState) => state.game);
  const [data, setData] = useState<any[]>([]);
  const [flippedCards, setFlippedCards] = useState<any[]>([]);
  const [matchedCards, setMatchedCards] = useState<any[]>([]);
  const [statistics, setStatistics] = useState<PlayersStatistics[]>([]);
  const [activePlayer, setActivePlayer] = useState(1);
  const [currentWinner, setCurrentWinner] = useState<PlayersStatistics | null>(
    null
  );

  useEffect(() => {
    if (flippedCards.length === 2) {
      checkCardMatches();
    }
  }, [flippedCards]);

  const generatePlayers = () => {
    const playersStatistics: PlayersStatistics[] = [];

    for (let i = 1; i <= settings.players; i++) {
      playersStatistics.push({
        player: i,
        matches: 0,
        moves: 0,
      });
    }

    setStatistics(playersStatistics);
  };

  const flipCard = (id: number) => {
    const card = data.find((cardData) => cardData.id === id);

    if (!card) return;

    if (flippedCards.length > 1 || card?.isActive || card?.isComplete) return;

    const updatedCards = data.map((cardData) =>
      cardData.id === id ? { ...cardData, isActive: true } : cardData
    );

    setData(updatedCards);
    setFlippedCards([...flippedCards, card]);
  };

  const changeActivePlayer = () => {
    const newPlayer = activePlayer + 1;
    setActivePlayer(newPlayer > settings.players ? 1 : newPlayer);
  };

  const changeMatchesCardState = () => {
    const [firstCard, secondCard] = flippedCards;

    const updatedCards = data.map((cardData) => {
      if ([firstCard.id, secondCard.id].includes(cardData.id)) {
        return { ...cardData, isComplete: true };
      }
      return cardData;
    });

    setMatchedCards([...matchedCards, firstCard, secondCard]);

    changePlayerStatistics({ isWin: true });

    setTimeout(() => {
      setData(updatedCards);
      setFlippedCards([]);
    }, 1000);
  };

  const checkCardMatches = () => {
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.value === secondCard.value) {
      return changeMatchesCardState();
    }
    const updatedCards = data.map((cardData) =>
      cardData.isComplete ? cardData : { ...cardData, isActive: false }
    );

    changePlayerStatistics({ isWin: false });
    changeActivePlayer();

    setTimeout(() => {
      setData(updatedCards);
      setFlippedCards([]);
    }, 1000);
  };

  const changePlayerStatistics = ({ isWin }: { isWin: boolean }) => {
    const newMoves = statistics.map((statistic) => {
      if (statistic.player === activePlayer) {
        return {
          ...statistic,
          moves: (statistics[activePlayer - 1].moves += 1),
          matches: isWin
            ? statistics[activePlayer - 1].matches + 1
            : statistics[activePlayer - 1].matches,
        };
      }
      return statistic;
    });

    currentGameWinner();
    setStatistics(newMoves);
  };

  const currentGameWinner = () => {
    const currentPlayerWinner = statistics.sort(
      (a, b) => b.matches - a.matches
    );

    setCurrentWinner(currentPlayerWinner[0]);
  };

  const resetGame = () => {
    generatePlayers();
    setCurrentWinner(null);
    setFlippedCards([]);
    setMatchedCards([]);
    setActivePlayer(1);
  };

  return (
    <GameContext.Provider
      value={{
        data,
        flipCard,
        statistics,
        activePlayer,
        matchedCards,
        currentWinner,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
