import { useState } from 'react';

export const useFetching = (callback) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setLoading(true);
      await callback();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
