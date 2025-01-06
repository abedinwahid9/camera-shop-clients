import useAxiosPublic from "./useAxiosPublic";
import useGetData from "./useGetData";

// Renamed to avoid conflict with built-in `fetch`
const fetchData = async (url) => {
  const axiosInstance = useAxiosPublic();
  const response = await axiosInstance.get(url);
  return response.data;
};

const useDataFetch = (url) => {
  const getData = useGetData(fetchData);
  const [data, loading] = getData(url);

  return { data, loading };
};

export default useDataFetch;
