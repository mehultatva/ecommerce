import React from 'react';
import {
  BrowserRouter as Router, useRoutes} from "react-router-dom";

import Home from '../view/home';
import About from '../view/about';
import Login from '../view/login';
import CreateAccount from '../view/createaccount';


const MainRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "create-account", element: <CreateAccount /> },
    { path: "home", element: <Home /> },
    { path: "about", element: <About /> },
  ]);
  return routes;
};

export default MainRoutes;
