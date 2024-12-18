import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-gradient-to-bl from-primary-color  to-optional-color">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
