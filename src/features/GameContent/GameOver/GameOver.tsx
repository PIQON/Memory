import { StatisticsItem } from '../GameStatistics/StatisticsItem/StatisticsItem';
import { Button } from '../../UI/Button/Button';
import { RouterLink } from '../../UI/RouterLink/RouterLink';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

import style from './GameOver.module.scss';
import {
  generatePlayersStatistics,
  resetGame,
} from '../../../store/slices/game/gameSlice';

export const GameOver = () => {
  const { settings, currentWinner, statistics } = useSelector(
    (state: RootState) => state.game
  );
  const dispatch = useDispatch();

  console.log(currentWinner);

  return (
    <div className={style['game-over']}>
      <p className={style['game-over__title']}>
        {settings.players === 1
          ? `${currentWinner ? 'You did it!' : "Its' a tie!"}`
          : `${currentWinner ? `Player ${currentWinner?.player} Wins!` : ''}`}
      </p>
      <p className={style['game-over__description']}>
        Game over! Here are the results
      </p>
      <div className={style['game-over__statistics']}>
        <StatisticsItem
          title={`${
            settings.players === 1
              ? `Moves Taken`
              : `Player ${currentWinner?.player} (Winner)`
          }`}
          value={`${currentWinner?.matches} ${
            settings.players === 1 ? `Moves` : `Pairs`
          }`}
          className="winner"
        />
        {statistics
          .filter((statistic) => statistic.player !== currentWinner?.player)
          .map((statistic) => {
            return (
              <StatisticsItem
                key={statistic.player}
                title={`Player ${statistic.player}`}
                value={`${statistic.matches} Pairs`}
                className={
                  statistic.player === currentWinner?.player ? 'winner' : ''
                }
              />
            );
          })}
      </div>
      <div className={style['game-over__menu']}>
        <Button
          type="button"
          classNames={['btn', 'btn--settings', 'btn--primary']}
          onClick={() => {
            dispatch(resetGame());
            dispatch(generatePlayersStatistics());
          }}
        >
          Restart
        </Button>
        <RouterLink path="/" title="Start New Game" />
      </div>
    </div>
  );
};
