import { createBrowserRouter } from "react-router-dom";

import { Admin } from './PAGES/admin'
import { Home } from './PAGES/home'
import { Login } from './PAGES/login'
import { Networks } from './PAGES/networks'
import { Private} from './privateroutes/private'
import { ErrorPage} from './PAGES/error'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/admin',
    element: <Private><Admin/></Private>
  },
  {
    path:'/admin/social',
    element: <Private><Networks/></Private>
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
  
]);

export { router };