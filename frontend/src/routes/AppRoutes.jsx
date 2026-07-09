import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Features from "../pages/Features";
import HowItWorks from "../pages/HowItWorks";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Admin from "../pages/Admin";
import SelectShop from "../pages/SelectShop";
import MainLayout from "../layout/MainLayout";
import AddShop from "../pages/AddShop";
import Bill from "../pages/Bill";
import UpdateStock from "../pages/UpdateStock";
import AddProduct from "../pages/AddProduct";
import AddEmployee from "../pages/AddEmployee";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <AboutUs /> },
        { path: "/features", element: <Features /> },
        { path: "/how-it-works", element: <HowItWorks /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/profile", element: <Profile /> },
        { path: "/admin", element: <Admin /> },
        {path: "/select-store", element: <SelectShop /> },
        { path: "/add-shop",element: <AddShop/>},
        { path: "/bill", element: <Bill /> },
        { path: "/update-stock", element: <UpdateStock />},
        { path: "/add-product", element: <AddProduct />},
        { path: "/add-employee", element: <AddEmployee />}
        ],
    },
]);

export default AppRoutes;