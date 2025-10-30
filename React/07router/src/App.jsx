import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom"
import './App.css'
import Home from "./componets/Home"
import Contact from "./componets/Contact"
import About from "./componets/About"
import NotFound from "./componets/NotFound"
import NavBar from "./componets/NavBar"
import AdminContact from "./componets/AdminContact"
import HrContact from "./componets/HrContact"
import HoAdmin from "./componets/HoAdmin"

const router = createBrowserRouter([
  {
    path:"/home",
    element:<>
    <NavBar/>
    <Home/>,
    </>

  },{
     path:"/contact",
    element:<>
    <NavBar/>
    <Contact/>,
    <Outlet/>
    </>,
    children:[
      {
        path:"admin",
        element:
        <>
        <AdminContact/>
        <Outlet/>
        </>,

        children:[
          { path:'ho',
            element:<HoAdmin/>

          }
        ]
      
      },{
        path:"hr",
        element:<HrContact/>
      }

    ]
  },{
       path:"/About",
    element:<>
    <NavBar/>
    <About/>,
    </>,
  },{
    path:'*',
    element:<>
    <NavBar/>
    <NotFound/>,
    </>
  }
])




function App() {

  return <RouterProvider router={router} />
}

export default App
