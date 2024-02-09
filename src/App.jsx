import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="md:w-4/5 w-full mx-auto md:p-0 p-2">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
