import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loader from "./components/Loader";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("./pages/Login"));
const Users = lazy(() => import("./pages/Dashboard/Users"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const SingleUser = lazy(() => import("./pages/Dashboard/SingleUser"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader/>}>
        <Login />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<Loader/>}>
        <Dashboard />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader/>}>
            <Users />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/users/:id",
        element: (
          <Suspense fallback={<Loader/>}>
            <SingleUser />
          </Suspense>
        ),
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
