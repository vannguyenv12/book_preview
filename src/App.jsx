import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import React from "react";
import Register from "./pages/register";
import Login from "./pages/login";
import Contact from "./pages/contact";
import BookPage from "./pages/book";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { callFetchAccount } from "./utils/userApi";
import { useDispatch } from "react-redux";
import { doFetchAction } from "./redux/account/accountSlice";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const dispatch = useDispatch();
  const getCurrentUser = async () => {
    const res = await callFetchAccount();
    console.log(res);
    if (res && res.data) {
      dispatch(doFetchAction(res.data));
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <div>404 Not Found</div>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "book",
          element: <BookPage />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
