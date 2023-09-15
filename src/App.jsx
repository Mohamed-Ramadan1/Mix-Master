import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages";

import { landingLoader } from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <h2>There was an error...</h2>,
        errorElement: <SinglePageError />,
        loader: landingLoader,
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
