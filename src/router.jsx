import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Hospital from "./pages/Hospitals";
import HospitalDetail from "./pages/HospitalDetail";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/hospital",
                element: <Hospital />
            },
            {
                path: "/hospitals/:id",
                element: <HospitalDetail />
            }
        ]
    }
])
