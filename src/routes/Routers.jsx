import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Signup from "../page/Signup/Signup";
import ErrorPage from "../components/ErrorPage";
import Collage from "../page/Collage/Collage";
import Admission from "../page/Admission/Admission";
import MyCollage from "../page/MyCollage/MyCollage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/collage',
                element: <Collage/>
            },
            {
                path: '/admission',
                element: <Admission/>
            },
            {
                path: '/mycollage',
                element: <MyCollage/>
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