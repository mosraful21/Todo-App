import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddTask = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Generate a unique task ID
    const taskId = Date.now();

    // Create a task object with ID, name, and priority
    const task = {
      taskId: taskId,
      taskName: data.taskName,
      priority: data.priority,
    };
    // Update tasks array with the new task
    const updatedTasks = [...existingTasks, task];
    
    // Store local storage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your task has been Added!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      reset();
      window.location.reload();
    });
  };

  return (
    <section className="py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-50 p-4 box-shadow"
      >
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-2">
          {/* Task Name */}
          <div className="space-y-1">
            <label className="font-semibold flex items-center">
              Task Name<span className="text-orange-500">*</span>
              {errors.taskName?.type === "required" && (
                <p role="alert" className="text-orange-600 text-sm ml-1">
                  Required
                </p>
              )}
            </label>
            <input
              className="w-full p-1.5 border border-gray-400 rounded-md focus:outline-blue-400"
              placeholder="Task Name"
              {...register("taskName", { required: true })}
            />
          </div>

          {/* Priority */}
          <div className="space-y-1">
            <label className="font-semibold flex items-center">
              Priority<span className="text-orange-500">*</span>
              {errors.priority?.type === "required" && (
                <p role="alert" className="text-orange-600 text-sm ml-1">
                  Required
                </p>
              )}
            </label>
            <select
              className="w-full p-1.5 border border-gray-400 rounded-md focus:outline-blue-400"
              {...register("priority", { required: true })}
            >
              <option value="">Select priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <input
            type="submit"
            value="Add Task"
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold px-16 py-2 rounded-md mt-2 cursor-pointer"
          />
        </div>
      </form>
    </section>
  );
};

export default AddTask;
