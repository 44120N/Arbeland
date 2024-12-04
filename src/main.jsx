import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Boilerplate from "./pages/Boilerplate.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Arbeland/",
    element: <Boilerplate />,
    children: [
      { path: "", element: <Boilerplate /> },
      {
        path: "boilerplate",
        element: <Boilerplate />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
