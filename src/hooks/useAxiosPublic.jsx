import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://camera-shop-server-gh3v.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
