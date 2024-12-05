import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Boilerplate from "./pages/Boilerplate.jsx";
import Landing from "./pages/Landing.jsx";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/Arbeland/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            {
                path: "boilerplate",
                element: <Boilerplate />,
            },
            {
                path: "landing",
                element: <Landing />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
