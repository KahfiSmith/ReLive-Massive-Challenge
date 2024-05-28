import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";
import Login from "./pages/login";
import Register from "./pages/register";
import Artikel from "./pages/artikel1";
import DashboardUser from "./pages/dashboardUser";
import ChatUser from "./pages/chatUser";
import Chat2User from "./pages/Chat2User";
import RiwayatUser from "./pages/riwayatUser";
import Artikel2 from "./pages/artikel2";
import Artikel4 from "./pages/artikel4";
import Artikel3 from "./pages/artikel3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />, 
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/artikel1",
    element: <Artikel/>
  },
  {
    path: "/artikel2",
    element: <Artikel2/>
  },
  {
    path: "/artikel3",
    element: <Artikel3/>
  },
  {
    path: "/artikel4",
    element: <Artikel4/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/dashboard-user",
    element: <DashboardUser />, 
  },
  {
    path: "/chat",
    element: <ChatUser />, 
  },
  {
    path: "/riwayat",
    element: <RiwayatUser />, 
  },
  {
    path: "/column-chat",
    element: <Chat2User />, 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
