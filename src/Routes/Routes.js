import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Home from '../../src/Pages/Home/Home/Home'
import Shop from "../Pages/Shop/Shop";
import Cart from "../Pages/Shared/Cart/Cart";
import Checkout from "../Pages/Shared/Cart/Checkout";
import Order from "../Pages/Shared/Order/Order";
import Service from "../Pages/Home/Service/Service";
import Contact from "../Pages/Home/Service/Contact";
import Login from "../Pages/Shared/From/Login";
import SignUp from "../Pages/Shared/From/SignUp";
import ForgetPassword from "../Pages/Shared/From/ForgetPassword";

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
            },
            {
                path:'/order',
                element:<Order/>
            },
            {
                path:'/service',
                element:<Service/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
            {
                path:'/forgetpasswold',
                element:<ForgetPassword/>
            }
        ]
    }
])

export default router