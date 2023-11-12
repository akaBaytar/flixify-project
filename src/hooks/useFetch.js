import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: key,
          },
        });
        const data = await response.json();

        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [key, url]);

  return { data, isLoading, error };
};

export default useFetch;
