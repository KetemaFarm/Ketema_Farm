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
import Checkout from "./pages/Checkout";

import { loader as homeLoader } from "./pages/Home";

import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as singleLandLoader } from "./pages/SingleLand";
import { loader as singleToolLoader } from "./pages/SingleTool";
import { loader as postLandsLoader } from "./pages/PostLands";
import { loader as productsLoader } from "./pages/Products";
import { loader as landListingsLoader } from "./pages/LandListings";
import { loader as toolsLoader } from "./pages/Tools";
import { loader as userProfileLoader } from "./pages/UserProfile";

// actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as postProductAction } from "./pages/PostProducts";
import { action as postLandsAction } from "./pages/PostLands";

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
        loader: productsLoader,
      },
      {
        path: "tools",
        element: <Tools />,
        loader: toolsLoader,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "lands",
        element: <LandListings />,
        loader: landListingsLoader,
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
        loader: userProfileLoader(store),
      },
      {
        path: "/checkout",
        element: <Checkout />,
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
    action: postLandsAction(store),
  },
  {
    path: "/postProducts",
    element: <PostProducts />,
    action: postProductAction(store),
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
