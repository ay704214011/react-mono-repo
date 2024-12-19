import { useEffect, useState } from 'react';

const useFetchApi = (url, options) => {
    const [response, setResponse] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState('');
    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setResponse(data);
            setLoading(false);
          } catch (e) {
            setError(true);
            setLoading(false);
          }
      };
      fetchData();
    }, []);
    return {
      response, isLoading, isError
    };
};

export default useFetchApi;