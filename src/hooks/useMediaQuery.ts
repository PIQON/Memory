import { useCallback, useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const getMatches = (mediaQuery: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(mediaQuery).matches;
    }

    return false;
  };
  const [matches, setMatches] = useState(getMatches(query));

  const handleChange = useCallback(() => {
    setMatches(getMatches(query));
  }, [query]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};
