import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Signup from "../page/Signup/Signup";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        // errorElement: ,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <Signup/>
    },
])