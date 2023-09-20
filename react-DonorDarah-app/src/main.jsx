import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./page/errorPage.jsx"
import Contact from './page/contact.jsx';
import LandingPage from "./page/index.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';  

const router = createBrowserRouter([
  {
    path:"/",
    element: <LandingPage />,
    errorElement:<ErrorPage />
  },
  {
    path:"contacts/:contactId",
    element : <Contact />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
