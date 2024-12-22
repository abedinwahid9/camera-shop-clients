import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [userData, setUserdata] = useState([]);
  const useAxios = useAxiosPublic();

  useEffect(() => {
    const userFunc = async () => {
      const data = await useAxios.get("/users");
      setUserdata(data.data);
    };
    userFunc();
  }, [useAxios]);

  const data = {
    toggleSidebar,
    setToggleSidebar,
    userData,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
