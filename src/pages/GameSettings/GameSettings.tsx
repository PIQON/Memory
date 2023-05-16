import { Link } from 'react-router-dom';
import { Settings } from '../../features/Settings/Settings';
import { Logo } from '../../features/UI/Logo/Logo';
import { Wrapper } from '../../features/UI/Wrapper/Wrapper';

import style from './GameSettings.module.scss';

export const GameSettings = () => {
  return (
    <main className={style['game-settings']}>
      <Wrapper maxWidth="40rem">
        <header className={style['game-settings__header']}>
          <Link to="/">
            <Logo fillColor="#fcfcfc" />
          </Link>
        </header>
        <Settings />
      </Wrapper>
    </main>
  );
};
