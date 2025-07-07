import App from "./App";
import Shop from "./components/Shop";
import Basket from "./components/Basket";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Shop",
    element: <Shop />,
  },
  {
    path: "/Basket",
    element: <Basket />,
  },
];

export default routes;
