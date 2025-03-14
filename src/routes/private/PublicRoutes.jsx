/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loading from "../../pages/Loading/Loading";

const PublicRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default PublicRoutes;
