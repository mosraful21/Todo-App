import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="bg-slate-200 h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
