import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home/Home/Home';
import ProjectDetails from './Components/Home/Projects/ProjectDetails';
import ProjectLayout from './Layout/ProjectLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,

      } 
    ]
  },
  {
    path: "/projects",
    element: <ProjectLayout />,
    children: [
      {
        path: "projectsDetails/:id",
        element: <ProjectDetails />
      },
    ],
  }  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
