import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import AddTask from "./AddTask";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Add Task
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
    setFilteredTasks(storedTasks);
  }, []);

  // Deleted Task
  const deleteTask = (taskIdToDelete) => {
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
          (task) => task.taskId !== taskIdToDelete
        );
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
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

  // Completed Task Status
  const markTaskCompleted = (taskIdToComplete) => {
    const updatedTasks = tasks.map((task) => {
      if (task.taskId === taskIdToComplete) {
        return { ...task, status: "Completed" };
      }
      return task;
    });
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your task has been Completed!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // Filter Task
  const filterTasks = (priority) => {
    const filtered = tasks.filter((task) =>
      task.priority.toLowerCase().includes(priority.toLowerCase())
    );
    setFilteredTasks(filtered);
  };
  const allTasks = () => {
    setFilteredTasks(tasks);
  };

  // Priority Color
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
        <p>Total Tasks: ({tasks.length})</p>
        <p>
          Completed Tasks: (
          {tasks.filter((task) => task.status === "Completed").length})
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex justify-center gap-4 py-2">
        <button className="button" onClick={allTasks}>
          All Tasks
        </button>
        <button className="button" onClick={() => filterTasks("high")}>
          High
        </button>
        <button className="button" onClick={() => filterTasks("medium")}>
          Medium
        </button>
        <button className="button" onClick={() => filterTasks("low")}>
          Low
        </button>
      </div>

      {/* Task Table Data */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-600 text-white">
              <th className="p-2 border w-[40%]">Task Name</th>
              <th className="p-2 border w-[20%]">Priority</th>
              <th className="p-2 border w-[20%]">Status</th>
              <th className="p-2 border w-[20%]">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredTasks.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-2 border text-xl text-center">
                  No tasks Found. Please add Task
                </td>
              </tr>
            ) : (
              filteredTasks.map((task) => (
                <tr
                  key={task.taskId}
                  className={getPriorityClass(task.priority)}
                >
                  <td className="p-2 border">{task.taskName}</td>
                  <td className="p-2 border">{task.priority}</td>
                  <td className="p-2 border">
                    {task.status ? task.status : "Incomplete"}
                  </td>
                  <td className="p-2 border">
                    <div className="flex items-center justify-center gap-3">
                      <Link to={`/edit/${task.taskId}`}>
                        <button className="bg-green-500 text-white px-2 font-semibold hover:bg-green-700">
                          Edit
                        </button>
                      </Link>

                      <button
                        className="bg-orange-500 text-white px-2 font-semibold hover:bg-orange-600"
                        onClick={() => deleteTask(task.taskId)}
                      >
                        Delete
                      </button>
                      {!task.status && (
                        <button
                          className="bg-blue-500 text-white px-2 font-semibold hover:bg-blue-600"
                          onClick={() => markTaskCompleted(task.taskId)}
                        >
                          Completed
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TodoList;
