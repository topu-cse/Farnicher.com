import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Home from '../../src/Pages/Home/Home/Home'
import Shop from "../Pages/Shop/Shop";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/shop',
                element:<Shop/>
            }
        ]
    }
])

export default router