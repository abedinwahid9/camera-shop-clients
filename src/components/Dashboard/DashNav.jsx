import { FaBars } from "react-icons/fa";
import useData from "../../hooks/useData";
import useAuth from "../../hooks/useAuth";

const DashNav = () => {
  const { toggleSidebar, setToggleSidebar } = useData();
  const { user } = useAuth();

  const toggleSide = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <div className=" flex flex-col overflow-hidden">
      <header className="flex items-center justify-between p-5 bg-white border-b">
        <button onClick={toggleSide} className="md:hidden">
          <FaBars className="h-6 w-6 text-gray-600" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">{user.email}</span>
          {/* <img
            className="h-8 w-8 rounded-full"
            src="/placeholder.svg?height=32&width=32"
            alt="User avatar"
          /> */}
        </div>
      </header>
    </div>
  );
};

export default DashNav;
