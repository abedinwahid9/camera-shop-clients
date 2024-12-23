import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);
  const useAxios = useAxiosPublic();

  useEffect(() => {
    const data = async () => {
      setLoading(true);
      const res = await useAxios.get("/products");
      setProductData(res.data);
      setLoading(false);
    };
    data();
  }, [useAxios]);

  const data = {
    toggleSidebar,
    setToggleSidebar,
    productData,
    loading,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
