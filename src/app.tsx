import { lazy } from "react";
import "./app.css";
import { RouterProvider } from "react-router/dom";
import LoadingProvider from "./providers/loading-provider";
import { createHashRouter } from "react-router";

const Error = lazy(() => import("./pages/error"));
const Home = lazy(() => import("./pages/home"));

const router = createHashRouter([
  {
    element: <LoadingProvider />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
