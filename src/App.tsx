import "./App.scss";
import Login from "./pages/Login";
import Users from "./pages/Dashboard/Users";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SingleUser from "./pages/Dashboard/SingleUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
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
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
