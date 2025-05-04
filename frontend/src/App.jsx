import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AppLayout,
  Error,
  About,
  Register,
  Login,
  Home,
  Products,
  Tools,
  Courses,
  LandListings,
  PostLands,
  PostProducts,
  PostTools,
  UserProfile,
  SingleTool,
  SingleLand,
  SingleProduct,
  Cart,
} from "./pages";
import { store } from "./store";

import { loader as homeLoader } from "./pages/Home";

import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as singleLandLoader } from "./pages/SingleLand";
import { loader as singleToolLoader } from "./pages/SingleTool";
import { loader as postLandsLoader } from "./pages/PostLands";

// actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as postProductAction } from "./pages/PostProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "tools",
        element: <Tools />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "lands",
        element: <LandListings />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      {
        path: "lands/:id",
        element: <SingleLand />,
        loader: singleLandLoader,
      },
      {
        path: "tools/:id",
        element: <SingleTool />,
        loader: singleToolLoader,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    action: registerAction,
  },
  {
    path: "/postLands",
    element: <PostLands />,
    loader: postLandsLoader(store),
  },
  {
    path: "/postProducts",
    element: <PostProducts />,
    action: postLandsLoader(store),
  },
  {
    path: "/postTools",
    element: <PostTools />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// json-server --watch products.json --port 8080
