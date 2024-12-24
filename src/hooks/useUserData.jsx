import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useUserData = () => {
  const { user, loading } = useAuth();
  const [userData, setUserdata] = useState([]);
  const useAxios = useAxiosPublic();

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await useAxios.get(`/users/${user.email}`);
      setUserdata(res.data);
    };

    if (user?.email && !loading) {
      fetchUserData();
    }
  }, [user, loading, useAxios]);

  return userData;
};

export default useUserData;
