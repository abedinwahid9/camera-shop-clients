import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-gradient-to-bl from-primary-color  to-optional-color">
        <Navbar />
      </div>
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
