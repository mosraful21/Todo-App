import { createBrowserRouter } from "react-router-dom";
import TodoList from "../Pages/TodoList";
import EditTask from "../Pages/EditTask";
import AddTask from "../Pages/AddTask";

const router = createBrowserRouter([
  {
    path: "/",
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
