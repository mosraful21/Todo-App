const TodoList = () => {
  return (
    <section className="w-4/5 mx-auto">
      <div className="py-5">
        <p className="text-3xl font-bold font-serif text-center">My Todo App</p>
        <button className="bg-blue-500 hover:bg-blue-700 hover:duration-300 px-5 py-2 text-white text-xl font-semibold rounded-lg">Add Task</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="p-2 border">Task_Name</th>
              <th className="p-2 border">Priority</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="p-2 border">A</td>
              <td className="p-2 border">High</td>
              <td className="p-2 border">Completed or Incomplete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TodoList;
