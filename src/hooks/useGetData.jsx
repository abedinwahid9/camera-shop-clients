import { useEffect, useState } from "react";

const useGetData = (fetchFunction) => {
  return (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetchFunction(url);
          setData(response);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [url, fetchFunction]);

    return [data, loading];
  };
};

export default useGetData;
