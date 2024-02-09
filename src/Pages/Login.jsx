import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.email === "todo@gmail.com" && data.password === "1234") {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Successfully Login",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/list");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong Password!",
      });
    }
  };
  return (
    <section className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-2/6 mx-auto p-4 rounded-md box-shadow"
      >
        <p className="text-2xl font-bold text-center py-2 text-blue-600">
          Login Todo App
        </p>
        {/* Email */}
        <div className="space-y-1">
          <label className="font-semibold flex items-center">
            Email<span className="text-orange-500">*</span>
            {errors.email?.type === "required" && (
              <p role="alert" className="text-orange-600 text-sm ml-1">
                Required
              </p>
            )}
          </label>
          <input
            className="w-full p-1.5 border border-gray-400 rounded-md focus:outline-blue-400"
            placeholder="todo@gmail.com"
            defaultValue={"todo@gmail.com"}
            {...register("email", { required: true })}
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="font-semibold flex items-center">
            Password<span className="text-orange-500">*</span>
            {errors.password?.type === "required" && (
              <p role="alert" className="text-orange-600 text-sm ml-1">
                Required
              </p>
            )}
          </label>

          <input
            className="w-full p-1.5 border border-gray-400 rounded-md focus:outline-blue-400"
            placeholder="1234"
            defaultValue={"1234"}
            {...register("password", { required: true })}
          />
        </div>

        <input
          type="submit"
          value="Login"
          className="w-full bg-blue-500 hover:bg-blue-800 text-white font-bold px-16 py-2 rounded-md mt-2 cursor-pointer"
        />
      </form>
    </section>
  );
};

export default Login;
