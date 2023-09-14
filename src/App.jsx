import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "Landing",
        element: <Landing />,
      },
      {
        path: "Newsletter",
        element: <Newsletter />,
      },
      {
        path: "Cocktail",
        element: <Cocktail />,
      },

      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
