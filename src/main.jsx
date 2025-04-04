import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CalorieCalculator from "./components/CalorieCalculator.jsx";
import ResultsPage from "./components/ResultsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cal-calc",
    element: <CalorieCalculator />,
  },
  {
    path: "/results",
    element: <ResultsPage></ResultsPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
