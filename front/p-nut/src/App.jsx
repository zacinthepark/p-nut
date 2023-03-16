import React, { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Pages/RootLayout";
import MainPage from "./Pages/MainPage";
import ArticleCreatePage from "./Pages/ArticleCreatePage";

import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "newpost",
        element: <ArticleCreatePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
