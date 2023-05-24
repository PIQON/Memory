import { Fragment } from 'react';
import { useGameContext } from '../GameContext/useGameContext';
import style from './GameStatistics.module.scss';
import { StatisticsItem } from './StatisticsItem/StatisticsItem';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const SinglePlayerPanel = () => {
  const { statistics } = useGameContext();

  return <StatisticsItem title="Moves" value={statistics[0]?.moves} />;
};

const MultiPlayerPanel = () => {
  const { statistics, activePlayer } = useGameContext();
  const matches = useMediaQuery('(max-width:48rem)');
  return (
    <Fragment>
      {statistics.map((statistic) => (
        <StatisticsItem
          key={statistic.player}
          title={`${matches ? 'P' : 'Player '}${statistic.player}`}
          value={statistic.moves}
          className={statistic.player === activePlayer ? 'current' : ''}
        />
      ))}
    </Fragment>
  );
};

export const GameStatistics = () => {
  const { settings } = useSelector((state: RootState) => state.game);

  return (
    <div className={style['game-statistics']}>
      {settings.players === 1 ? <SinglePlayerPanel /> : <MultiPlayerPanel />}
    </div>
  );
};
