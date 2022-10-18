import "./App.scss";
import Login from "./pages/Login";
import Users from "./pages/Dashboard/Users";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SingleUser from "./pages/Dashboard/SingleUser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loader from "./components/Loader";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: "/dashboard/users/:id",
        element: <SingleUser />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </QueryClientProvider>
  );
}

export default App;
