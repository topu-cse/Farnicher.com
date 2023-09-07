import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Home from '../../src/Pages/Home/Home/Home'
import Shop from "../Pages/Shop/Shop";
import Cart from "../Pages/Shared/Cart/Cart";
import Checkout from "../Pages/Shared/Cart/Checkout";

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
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/checkout',
                element:<Checkout/>
            }
        ]
    }
])

export default router