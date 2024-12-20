import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";

const useData = () => {
  const data = useContext(DataContext);
  return data;
};

export default useData;
