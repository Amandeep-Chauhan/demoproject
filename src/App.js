import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
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
        path: "/category",
        errorElement: <div>error comp</div>,
        element: <div>details</div>,
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


