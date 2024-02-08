import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import AddTask from "./AddTask";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Function to delete a task
  const deleteTask = (indexToDelete) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTasks = tasks.filter(
          (task, index) => index !== indexToDelete
        );
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your task has been Deleted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // Function to mark a task as completed
  const markTaskCompleted = (indexToComplete) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === indexToComplete) {
        return { ...task, status: "Completed" };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your task has been Completed!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // Function to get the CSS class based on priority
  const getPriorityClass = (priority) => {
    switch (priority.toLowerCase()) {
      case "low":
        return "low-priority";
      case "medium":
        return "medium-priority";
      case "high":
        return "high-priority";
      default:
        return "";
    }
  };

  return (
    <section>
      <div className="py-5">
        <p className="text-3xl font-bold font-serif text-center">My Todo App</p>
        <AddTask />
      </div>

      <div className="flex items-center justify-center gap-4 text-xl font-bold py-2">
        <p>Total Tasks: {tasks.length}</p>
        <p>
          Completed Tasks:{" "}
          {tasks.filter((task) => task.status === "Completed").length}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 text-center">
          <thead>
            <tr>
              <th className="p-2 border w-[40%]">Task_Name</th>
              <th className="p-2 border w-[20%]">Priority</th>
              <th className="p-2 border w-[20%]">Status</th>
              <th className="p-2 border w-[20%]">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className={getPriorityClass(task.priority)}>
                <td className="p-2 border">{task.taskName}</td>
                <td className="p-2 border">{task.priority}</td>
                <td className="p-2 border">
                  {task.status ? task.status : "Incompleted"}
                </td>
                <td className="p-2 border">
                  <div className="flex items-center justify-center gap-3">
                    <Link to={`/edit/${index}`}>
                      <button className="bg-green-500 text-white px-2 font-semibold hover:bg-green-700">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="bg-orange-500 text-white px-2 font-semibold hover:bg-orange-600"
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </button>
                    {task.status !== "Completed" && (
                      <button
                        className="bg-blue-500 text-white px-2 font-semibold hover:bg-blue-600"
                        onClick={() => markTaskCompleted(index)}
                      >
                        Completed
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TodoList;
