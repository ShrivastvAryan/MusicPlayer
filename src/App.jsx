import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./pages/Home";
import { About } from "./pages/About";

export const App=()=>{
  const router =createBrowserRouter([
    {
      path:"/",
      element:<Homepage/>,
    },
    {
      
    },
    {
      path:"/about",
      element:<About/>
    },
  ]);

  return(
    <RouterProvider router={router}/>
  )
}