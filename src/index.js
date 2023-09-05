import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Connexion from "./pages/Connexion/Connexion";
import Inscription from "./pages/Inscription/Inscription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  
  },
  {
    path: "connexion",
    element: <Connexion />,
  },
  {
    path: "inscription",
    element: <Inscription />,
  },
  

]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>
);
