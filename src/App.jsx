import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UserPage from "./components/UserPage";
//import { useState } from "react";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },

    {
      path: "/:id",
      element: <UserPage />,
    },
   
  
  ]);

  return (
    <RouterProvider router={router}>
      <Dashboard />
      </RouterProvider>
  );
}

export default App;