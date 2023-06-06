import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Dashboard from './Components/Dashboard';
import Layout from './Layout';
import Cart from './Components/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "/details",
        children: [
          {
            index: true,
            element: <div>details</div>,
          },
          {
            path: "/details/:id",
            element: <div>details: id</div>,
          },
        ],
      },
      {
        path: "/cart",
        errorElement: <div>error comp</div>,
        element: <Cart />,
      }
    ],
  },

]);

function App() {
  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}

export default App;


