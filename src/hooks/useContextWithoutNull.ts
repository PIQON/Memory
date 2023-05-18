import { Context, useContext } from 'react';

export const useContextWithoutNull = <T>(context: Context<T | null>) => {
  const contextValue = useContext(context);

  if (contextValue === null) {
    throw Error('Context has not been Provided!');
  }
  return contextValue;
};
