import { createContext, useEffect, useState, useCallback } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);
  const useAxios = useAxiosPublic();
  const cart = [];

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await useAxios.get("/products");
      setProductData(res.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    } finally {
      setLoading(false);
    }
  }, [useAxios]);

  // Automatically fetch data on mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Include the refresh function in the context
  const data = {
    toggleSidebar,
    setToggleSidebar,
    productData,
    loading,
    cart,
    refresh: fetchData, // Expose the refresh function
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
