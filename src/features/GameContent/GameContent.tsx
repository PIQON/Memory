import { Fragment } from 'react';
import { Wrapper } from '../UI/Wrapper/Wrapper';
import { GameBoard } from './GameBoard/GameBoard';
import { GameHeader } from './GameHeader/GameHeader';

export const GameContent = () => {
  return (
    <Fragment>
      <Wrapper maxWidth="70rem">
        <GameHeader />
      </Wrapper>
      <Wrapper maxWidth="36rem">
        <GameBoard />
      </Wrapper>
    </Fragment>
  );
};
