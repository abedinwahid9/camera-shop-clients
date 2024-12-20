import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
// import useAxiosPublic from "../../hooks/useAxiosPublic";

const GoogleAuth = () => {
  const { GoogleLogin } = useAuth();
  const navigate = useNavigate();
  //   const useAxios = useAxiosPublic();

  const handleGoogle = () => {
    GoogleLogin().then(async (user) => {
      const email = user.user.email;
      const role = "buyer";
      const status = "approved";
      const wishlist = [];
      const userData = { email, role, status, wishlist };

      //   const res = await useAxios.post("/users", userData);
      //   if (user.user) {
      //     navigate("/");
      //   }
      //   if (res.data.insertedId) {
      //     console.log(res);
      //   }
    });
  };

  return (
    <div>
      <div onClick={handleGoogle} className="btn w-full">
        <FcGoogle className="text-3xl" />
        <span className="text-lg font-bold text-lime-900 uppercase">
          google
        </span>
      </div>
    </div>
  );
};

export default GoogleAuth;
