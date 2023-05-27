import { Fragment } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { Link } from 'react-router-dom';
import { Logo } from '../../UI/Logo/Logo';
import { Button } from '../../UI/Button/Button';

import { RouterLink } from '../../UI/RouterLink/RouterLink';
import { useDispatch } from 'react-redux';
import {
  generatePlayersStatistics,
  resetGame,
} from '../../../store/slices/game/gameSlice';

import style from './GameHeader.module.scss';

export const GameHeader = () => {
  const matches = useMediaQuery('(max-width:48rem)');
  const dispatch = useDispatch();

  return (
    <header className={style['header']}>
      <Link to="/">
        <Logo fillColor="#152938" />
      </Link>
      <div className={style['header__actions']}>
        {matches ? (
          <MobileMenu />
        ) : (
          <Fragment>
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
            <RouterLink path="/" title="New Game" />
          </Fragment>
        )}
      </div>
    </header>
  );
};
