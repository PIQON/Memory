import { Link } from 'react-router-dom';
import { Button } from '../../UI/Button/Button';

import style from './GameContentMobileMenu.module.scss';
import { Fragment } from 'react';

export const GameContentMobileMenu = () => {
  return (
    <Fragment>
      <Button
        type="button"
        classNames={['btn', 'btn--settings', 'btn--primary']}
      >
        Menu
      </Button>
      <div className={style['menu']}>
        <ul className={style['menu__list']}>
          <li className={style['menu__item']}>
            <Button
              type="button"
              classNames={['btn', 'btn--settings', 'btn--primary']}
            >
              Restart
            </Button>
          </li>
          <li className={style['menu__item']}>
            <Link to="/" className={style['mobile-link']}>
              New Game
            </Link>
          </li>
          <li className={style['menu__item']}>
            <Button type="button" classNames={['btn', 'btn--settings']}>
              Resume Game
            </Button>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
