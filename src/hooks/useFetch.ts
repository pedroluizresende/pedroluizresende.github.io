import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: any;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState< any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error, data };
}

export default useFetch;
