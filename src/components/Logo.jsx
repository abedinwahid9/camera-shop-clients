import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 ">
      <img
        className="w-10 h-10 rounded-full"
        src="/src/assets/logo.jpg"
        alt=""
      />
      <h1 className="uppercase  bg-gradient-to-r from-secondary-color  to-text-color text-transparent bg-clip-text font-bold text-base md:text-xl">
        sutter studio
      </h1>
    </Link>
  );
};

export default Logo;
