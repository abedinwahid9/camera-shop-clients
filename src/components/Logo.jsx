import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 ">
      <img className="w-10 h-10 rounded-full" src={logo} alt="" />
      <h1 className="uppercase  bg-gradient-to-r from-secondary-color  to-text-color text-transparent bg-clip-text font-bold text-base md:text-xl">
        sutter studio
      </h1>
    </Link>
  );
};

export default Logo;
