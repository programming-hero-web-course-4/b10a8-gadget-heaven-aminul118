import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../components/ProductCards";
import ProductDetails from "../pages/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <ProductCards />,
            loader: () => fetch("../products.json"),
          },
          {
            path: "category/:category",
            element: <ProductCards />,
            loader: ({ params }) =>
              fetch(`../products.json?category=${params.category}`),
          },
        ],
      },
      {
        path: "/productdetails/:productname",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("products.json"),
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export { routes };
