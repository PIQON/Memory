import { Fragment } from 'react';
import { useModalContext } from '../../../../store/modal/useModalContext';
import { Modal } from '../../../UI/Modal/Modal';
import { Link } from 'react-router-dom';
import { Button } from '../../../UI/Button/Button';

import style from './MobileMenu.module.scss';

export const MobileMenu = () => {
  const { isOpen, openModal, closeModal } = useModalContext();

  return (
    <Fragment>
      <Button
        type="button"
        classNames={['btn', 'btn--settings', 'btn--primary']}
        aria-label={`${isOpen ? 'Close' : 'Open'} menu`}
        aria-expanded={isOpen}
        onClick={openModal}
      >
        Menu
      </Button>
      {isOpen && (
        <Modal>
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
                <Link
                  to="/"
                  className={style['mobile-link']}
                  onClick={closeModal}
                >
                  New Game
                </Link>
              </li>
              <li className={style['menu__item']}>
                <Button
                  type="button"
                  classNames={['btn', 'btn--settings']}
                  onClick={closeModal}
                >
                  Resume Game
                </Button>
              </li>
            </ul>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};
