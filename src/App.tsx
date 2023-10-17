import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PlayGround from "./pages/PlayGround";
import Strapi from "./pages/Strapi";

export default function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <PlayGround />
      },
      {
        path: 'strapi',
        element: <Strapi />
      }
    ]
  )
  return (
    <RouterProvider router={router} />
  )
}