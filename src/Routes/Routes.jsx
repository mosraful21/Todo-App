import { createBrowserRouter } from "react-router-dom";
import TodoList from "../Pages/TodoList";
import EditTask from "../Pages/EditTask";
import AddTask from "../Pages/AddTask";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/list",
    element: <TodoList />,
  },
  {
    path: "/add",
    element: <AddTask />,
  },
  {
    path: "/edit/:id",
    element: <EditTask />,
  },
]);

export default router;
