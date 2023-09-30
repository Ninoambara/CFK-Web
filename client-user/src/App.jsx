import { useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./views/HomePage";
import "./App.css"
import Layout from "./views/Layout";
import DetailPage from "./views/DetailPage";



function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/detail/:id",
          element: <DetailPage />
        }
      ]
    }
  ])
  return(
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App;
