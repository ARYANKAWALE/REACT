import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import ParaComp from './ParaComp';
import Courses from './courses';
import MockTest from './MockTest';
import Reports from './components/Reports';
import NotFound from './components/NotFound';
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <NavBar />
        <Home />
      </div>
    },
    {
      path: "/about",
      element: <div>
        <NavBar />
        <About />
      </div>
    },
    {
      path: "/dashboard",
      element: <div>
        <NavBar />
        <Dashboard />
      </div>,
      children: [
        {
          path: 'courses',
          element: <Courses />
        },

        {
          path: 'mock-tests',
          element: <MockTest />
        },
        {
          path: 'reports',
          element: <Reports />
        }
      ]
    },
    {
      path: "/student/:id",
      element:
        <div>
          <NavBar />
          <ParaComp />
        </div>
    },
    {
      path:'*',
      element:<NotFound/>
    }
  ]
);


function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
