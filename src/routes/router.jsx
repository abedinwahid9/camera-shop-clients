import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../pages/Dashboard/Overview";
import AddProducts from "../pages/Dashboard/AddProducts";
import Users from "../pages/Dashboard/Users";
import AllProducts from "../pages/Dashboard/AllProducts";
import PrivateRoutes from "./private/PrivateRoutes";
import AdminRoutes from "./private/AdminRoutes";
import SellerRoutes from "./private/SellerRoutes";
import PublicRoutes from "./private/PublicRoutes";
import Cart from "../pages/Cart";
import UpdateProduct from "../pages/Dashboard/UpdateProduct";
import Wishlist from "../pages/Dashboard/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoutes>
            <Register />
          </PublicRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview />,
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerRoutes>
            <AddProducts />
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/edit-product/:id",
        element: (
          <SellerRoutes>
            <UpdateProduct />
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoutes>
            <Users />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/all-products",
        element: (
          <SellerRoutes>
            <AllProducts />
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);
