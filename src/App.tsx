import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import Auth from "./pages/auth";
import Home from "./pages/home";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'



const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Auth/>
      },
      {
        path: 'dashboard',
        element: <Home/>
      }
    ]
  }
])


const App = () => {
  const queryClient = new QueryClient()
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
        <Toaster/>
      </QueryClientProvider>
    </div>
  );
};

export default App;