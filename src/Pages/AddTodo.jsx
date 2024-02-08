const AddTodo = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="border-2 border-blue-400 p-5">
        <div className="flex items-center gap-4 py-2">
          <input
            type="text"
            name="name"
            placeholder="Sub Category Name"
            className="w-1/2 p-1.5 border border-gray-400 rounded-md focus:outline-blue-400"
            required
          />
          <select
            name="category"
            className="w-1/2 p-1.5 border border-gray-400 rounded-md focus:outline-blue-400"
            required
          >
            <option value="">Select Category</option>
          </select>
        </div>
        <input
          type="submit"
          value="Add Sub Category"
          className="bg-blue-500 w-full text-white p-1.5 rounded-md mt-2 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AddTodo;
