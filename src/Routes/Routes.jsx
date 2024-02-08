import { createBrowserRouter } from "react-router-dom";
import TodoList from "../Pages/TodoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoList />,
  },
]);

export default router;
