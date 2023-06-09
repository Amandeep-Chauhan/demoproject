import './App.css';

import { CreateContext } from "./CreateContext";
import React, { createContext, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Dashboard from './Components/Dashboard';
import Layout from './Layout';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';

export const Context = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      // {
      //   path: "/details",
      //   children: [
      //     {
      //       index: true,
      //       element: <div>details</div>,
      //     },
      //     {
      //       path: "/details/:id",
      //       element: <div>details: id</div>,
      //     },
      //   ],
      // },
      {
        path: "/cart",
        errorElement: <div>error comp</div>,
        element: <Cart />,
      },
      {
        path: "/details/:id",
        errorElement: <div>error comp</div>,
        element: <ProductDetails />,
      }
      
    ],
  },
]);


function App() {
  const [store, setStore] = useState({ test: 'wwww' });

  return (
    <div className="App">
      <CreateContext.Provider value={{ store, setStore}}>
          <RouterProvider router={router} />
      </CreateContext.Provider>
    </div>
  );
}

export default App;


