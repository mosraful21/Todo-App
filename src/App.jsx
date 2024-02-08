import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
  return (
    <section className="bg-slate-200 h-screen">
      <div className="md:w-4/5 w-full mx-auto md:p-0 p-2">
        <RouterProvider router={router} />
      </div>
    </section>
  );
}

export default App;
