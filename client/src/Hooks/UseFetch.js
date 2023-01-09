import { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const result = await axios.get(url);
        setData(result);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetch();
    // eslint-disable-next-line
  }, []);

  const refetch = async (url) => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, refetch };
};

export default UseFetch;
