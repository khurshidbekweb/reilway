import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import Contact from "./pages/contact";
import Auth from "./pages/auth";



const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    children: [
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