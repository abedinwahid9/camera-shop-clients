import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loading from "../../pages/Loading/Loading";
import useUserData from "../../hooks/useUserData";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const userData = useUserData();

  if (loading || !userData?.role) {
    return <Loading />;
  }

  if (user && userData?.role === "admin") {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoutes;
