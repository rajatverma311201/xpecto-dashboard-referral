import { useState, useEffect } from "react";
import UsersCountOnReferral from "./pages/UsersCountOnReferral";
import MainNavigation from "./components/MainNavigation";
import Registrations from "./pages/Registrations";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/referral-data",
        element: <UsersCountOnReferral />,
    },

]);
function App() {
    // return <div className="App"></div>;

    return (
        <>
            <MainNavigation />
            <div className="body-container">
                <RouterProvider router={router} />
            </div>
        </>
    );
}

export default App;
