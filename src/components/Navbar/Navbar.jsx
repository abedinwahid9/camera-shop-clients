import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Logo";

import useAuth from "../../hooks/useAuth";
import Button from "../share/Button";
import { FaCartArrowDown, FaRegHeart } from "react-icons/fa";
import { RiDashboardLine } from "react-icons/ri";
import useUserData from "../../hooks/useUserData";
import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import { useTime, useTransform, motion } from "motion/react";

const Navbar = () => {
  const { user, LogOut } = useAuth();
  const userData = useUserData();
  const { cart } = useContext(DataContext);
  let role;

  switch (userData?.role) {
    case "admin":
      role = false;
      break;
    case "seller":
      role = false;
      break;
    case undefined:
      role = true;
      break;
    default:
      role = true;
  }
  const handleLogout = () => {
    LogOut();
    role = false;
  };
  const navList = [
    {
      title: "home",
      link: "/",
    },
    {
      title: "products",
      link: "/products",
    },
    {
      title: "about",
      link: "/about",
    },
    {
      title: "contact us",
      link: "/contact-us",
    },
  ];

  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });
  const rotateBg = useTransform(rotate, (r) => {
    return `linear-gradient(${r}deg,#ce713d,#0a578c)`;
  });

  return (
    <header className="navbar container mx-auto ">
      <div className="navbar-start md:w-1/2 w-full ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="bg-gradient-to-bl  from-optional-color  to-primary-color dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navList.map((nav, i) => {
              return (
                <li key={i}>
                  <NavLink
                    className="text-secondary-color font-medium uppercase nav-link"
                    to={nav.link}
                  >
                    {nav.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 px-1">
          {navList.map((nav, i) => {
            return (
              <li key={i}>
                <NavLink
                  className="text-secondary-color font-semibold uppercase nav-link"
                  to={nav.link}
                >
                  {nav.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex justify-center items-center gap-5">
          <div className="flex">
            {role && (
              <Link to="/cart">
                <div className="badge bg-secondary-color text-white border-secondary-color font-semibold">
                  {cart?.length}
                </div>
                <FaCartArrowDown className="text-3xl font-bold text-secondary-color" />
              </Link>
            )}
          </div>
          {user ? (
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button">
                <div className="avatar">
                  <motion.div
                    className=" w-14 rounded-full p-[5px]"
                    style={{
                      background: rotateBg,
                    }}
                  >
                    <div className="bg-white rounded-full">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] gap-2 p-2 shadow"
              >
                <li>
                  <p>{user.email}</p>
                </li>
                {!role && (
                  <li>
                    <Link to="/dashboard/overview">
                      <RiDashboardLine className="text-secondary-color  text-xl" />
                      <p>Dashboard</p>
                    </Link>
                  </li>
                )}

                {role && (
                  <li>
                    <Link to="/dashboard/wishlist">
                      <FaRegHeart className="text-secondary-color  text-xl" />{" "}
                      <p>Wishlist</p>
                    </Link>
                  </li>
                )}
                <li onClick={handleLogout}>
                  <Button title="logout" />
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-secondary-color py-2 px-5 rounded-lg text-white font-semibold uppercase hover:bg-optional-color hover:border-secondary-color hover:border-2"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
