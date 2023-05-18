import { GameContent } from '../../features/GameContent/GameContent';
import style from './Game.module.scss';

export const Game = () => {
  return (
    <main className={style['game']}>
      <GameContent />
    </main>
  );
};
