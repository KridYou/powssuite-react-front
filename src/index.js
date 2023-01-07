import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Login from './Login'
import Register from './Register'
import ContextWrapper from './context/ContextWrapper';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; //import router dom

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/login",
    element: <Login />,
  },
  {
    path:"/register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} /> 
  </React.StrictMode>
);
