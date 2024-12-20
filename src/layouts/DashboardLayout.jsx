import { Outlet } from "react-router-dom";
import DashNav from "../components/Dashboard/DashNav";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className=" flex ">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <DashNav />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
