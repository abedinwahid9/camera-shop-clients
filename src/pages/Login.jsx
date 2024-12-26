import { useState } from "react";
import { FaCamera, FaLock, FaUserAlt } from "react-icons/fa";
import { TbEye, TbEyeOff } from "react-icons/tb";
import { CiLogin } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import GoogleAuth from "../components/share/GoogleAuth.jsx";
import useAxiosPublic from "../hooks/useAxiosPublic.jsx";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { LoginUser } = useAuth();
  const useAxios = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const handleForm = (data) => {
    LoginUser(data.email, data.password).then(async (user) => {
      if (user.user) {
        const jwt = await useAxios.post("/jwt/authentication", {
          email: user.user.email,
        });
        if (jwt.status === 200) {
          localStorage.setItem("access-token", jwt.data.token);
        }
        reset();
        navigate("/");
      }
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <FaCamera className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(handleForm)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUserAlt
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  {...register("email", {
                    required: true,
                  })}
                  type="email"
                  autoComplete="email"
                  className="focus:ring-secondary-color py-2 focus:outline-secondary-color block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-600 pt-1 capitalize font-semibold">
                  email is required
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  className="focus:ring-blue-500 focus:outline-secondary-color py-2 block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="••••••••"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-secondary-color"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <TbEyeOff className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <TbEye className="h-5 w-5" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600 pt-1 capitalize font-semibold">
                  password is required
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-secondary-color border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <CiLogin className="h-5 w-5 mr-2" aria-hidden="true" />
                Log in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 gap-3">
              <GoogleAuth />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
