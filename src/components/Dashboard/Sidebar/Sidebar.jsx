import {
  FaShoppingCart,
  FaUsers,
  FaChartBar,
  FaCogs,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaHome,
} from "react-icons/fa";

import useData from "../../../hooks/useData";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo";
import { LuLibraryBig } from "react-icons/lu";

const Sidebar = () => {
  const { toggleSidebar, setToggleSidebar } = useData();

  const toggleSidebarClose = () => {
    setToggleSidebar(!toggleSidebar);
  };

  const getNavLinkClass = ({ isActive }) =>
    `flex items-center mt-4 py-2 px-6 ${
      isActive
        ? "bg-blue-100 text-blue-700 border-l-4 border-blue-600"
        : "text-gray-600 hover:bg-gray-200 hover:text-gray-700"
    }`;

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        className={`${
          toggleSidebar ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <Logo />
          </div>
          <button onClick={toggleSidebarClose} className="md:hidden">
            <FaTimes className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <nav className="mt-5 px-4">
          <NavLink to="/dashboard/overview" className={getNavLinkClass}>
            <FaBars className="h-5 w-5 mr-3" />
            Dashboard
          </NavLink>
          <NavLink to="/dashboard/users" className={getNavLinkClass}>
            <FaUsers className="h-5 w-5 mr-3" />
            Users
          </NavLink>
          <NavLink to="/dashboard/add-product" className={getNavLinkClass}>
            <FaShoppingCart className="h-5 w-5 mr-3" />
            Add Product
          </NavLink>
          <NavLink to="/dashboard/all-products" className={getNavLinkClass}>
            <LuLibraryBig className="h-5 w-5 mr-3" />
            All Products
          </NavLink>
          <NavLink to="/" className={getNavLinkClass}>
            <FaHome className="h-5 w-5 mr-3" />
            Home
          </NavLink>
        </nav>
        <div className="absolute bottom-0 w-full">
          <div className="flex items-center py-4 px-6 text-gray-600 hover:bg-gray-200 hover:bg-opacity-25 hover:text-gray-700">
            <FaSignOutAlt className="h-5 w-5 mr-3" />
            Logout
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
