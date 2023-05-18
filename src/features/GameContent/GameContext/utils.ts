export const REPETITION = 2;

/*
 @PARAM - Array
 @DESCRIPTION - Shuffle array
*/

export const shuffleArray = <T>(data: T[]) => {
  const shuffledArray = [...data];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};
