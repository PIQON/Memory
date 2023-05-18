import { Fragment } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { Link } from 'react-router-dom';
import { Logo } from '../../UI/Logo/Logo';
import { Button } from '../../UI/Button/Button';

import style from './GameHeader.module.scss';

export const GameHeader = () => {
  const matches = useMediaQuery('(max-width:48rem)');

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
