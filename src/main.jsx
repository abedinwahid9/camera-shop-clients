import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import DataProvider from "./DataProvider/DataProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </DataProvider>
  </StrictMode>
);
