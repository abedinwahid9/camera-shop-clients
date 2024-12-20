import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const data = {
    toggleSidebar,
    setToggleSidebar,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
