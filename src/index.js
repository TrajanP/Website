//Library Imports
import React from 'react';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//Component Imports
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Faq from "./Pages/Faq.js";
import Portfolio from "./Pages/Portfolio.js";
import Contact from "./Pages/Contact.js";
import HashRouter from "react-router-dom";

// const router = createBrowserRouter([
  const router = createHashRouter([
  {
    path: "/website/",
    element: <Home />,
  },
  {
    path: "/website/about",
    element: <About />,
  },
  {
    path: "/website/faq",
    element: <Faq />,
  },
  {
    path: "/website/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/website/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
