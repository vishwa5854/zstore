import './App.css';
import Home from './components/home/home';
import Add from './components/add/add';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Home />,
  }, {
    path: "/add",
    element: <Add />,
    action: () => {
      console.log("asd")
    }
  }]);

  return <RouterProvider router={router} />;
}

export default App;
