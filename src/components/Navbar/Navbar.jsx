import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Logo";

import useAuth from "../../hooks/useAuth";
import Button from "../share/Button";
import { FaCartArrowDown, FaRegHeart } from "react-icons/fa";
import { RiDashboardLine } from "react-icons/ri";

const Navbar = () => {
  const { user, LogOut } = useAuth();

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
            className="bg-gradient-to-bl from-optional-color  to-primary-color dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
            <Link to="/cart">
              <div className="badge bg-secondary-color text-white border-secondary-color font-semibold">
                +99
              </div>
              <FaCartArrowDown className="text-3xl font-bold text-secondary-color" />
            </Link>
          </div>
          {user ? (
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button">
                <div className="avatar">
                  <div className="ring-secondary-color ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] gap-2 p-2 shadow"
              >
                <li>
                  <p>{user.email}</p>
                </li>
                <li>
                  <Link to="/dashboard/overview">
                    <RiDashboardLine className="text-secondary-color  text-xl" />
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/overview">
                    <FaRegHeart className="text-secondary-color  text-xl" />{" "}
                    <p>Wishlist</p>
                  </Link>
                </li>
                <li onClick={() => LogOut()}>
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
