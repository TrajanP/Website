//Library Imports
import React from 'react';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
//Component Imports
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Faq from "./Pages/Faq.js";
import Portfolio from "./Pages/Portfolio.js";
import Contact from "./Pages/Contact.js";
import HashRouter from "react-router-dom";
import App from './App';

//Below code was used for React-Router-Dom V6
// const router = createBrowserRouter([
//   const router = createHashRouter([
//   {
//     path: "/Website/",
//     element: <Home />,
//   },
//   {
//     path: "/Website/about",
//     element: <About />,
//   },
//   {
//     path: "/Website/faq",
//     element: <Faq />,
//   },
//   {
//     path: "/Website/portfolio",
//     element: <Portfolio />,
//   },
//   {
//     path: "/Website/contact",
//     element: <Contact />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
