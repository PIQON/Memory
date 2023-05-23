import { Fragment } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { Link } from 'react-router-dom';
import { Logo } from '../../UI/Logo/Logo';
import { Button } from '../../UI/Button/Button';

import { useGameContext } from '../GameContext/useGameContext';

import style from './GameHeader.module.scss';
import { RouterLink } from '../../UI/RouterLink/RouterLink';

export const GameHeader = () => {
  const { resetGame } = useGameContext();
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
              onClick={resetGame}
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
