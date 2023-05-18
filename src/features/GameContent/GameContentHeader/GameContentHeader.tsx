import { Link } from 'react-router-dom';
import { Logo } from '../../UI/Logo/Logo';
import { Button } from '../../UI/Button/Button';

import style from './GameContentHeader.module.scss';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { Fragment } from 'react';
import { GameContentMobileMenu } from '../GameContentMobileMenu/GameContentMobileMenu';

export const GameContentHeader = () => {
  const matches = useMediaQuery('(max-width:48rem)');

  return (
    <header className={style['header']}>
      <Link to="/">
        <Logo fillColor="#152938" />
      </Link>
      <div className={style['header__actions']}>
        {matches ? (
          <GameContentMobileMenu />
        ) : (
          <Fragment>
            <Button
              type="button"
              classNames={['btn', 'btn--settings', 'btn--primary']}
            >
              Restart
            </Button>
            <Button type="button" classNames={['btn', 'btn--settings']}>
              New Game
            </Button>
          </Fragment>
        )}
      </div>
    </header>
  );
};
