export type GameBoardCardData = {
  id: number;
  value: string;
  isActive: boolean;
  isComplete: boolean;
};

export const GameBoardCard = ({
  value,
  isActive,
  isComplete,
}: GameBoardCardData) => {
  return <div>{value}</div>;
};
