import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import Contact from "./pages/contact";
import Auth from "./pages/auth";
import Home from "./pages/home";



const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'auth',
        element: <Auth/>
      }
    ]
  }
])


const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;