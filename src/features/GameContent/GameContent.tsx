import { Wrapper } from '../UI/Wrapper/Wrapper';
import { GameContentHeader } from './GameContentHeader/GameContentHeader';

export const GameContent = () => {
  return (
    <div>
      <Wrapper maxWidth="70rem">
        <GameContentHeader />
      </Wrapper>
    </div>
  );
};
