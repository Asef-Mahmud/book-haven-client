import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Register from "../Pages/Auth/Register";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login";
import AllBooks from "../Pages/AllBooks/AllBooks";
import AddBook from "../Pages/AddBook/AddBook";
import MyBooks from "../Pages/MyBooks/MyBooks";



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "/auth",
            Component: AuthLayout,
            children:[
                {
                    path:"/auth/login",
                    Component: Login
                },
                {
                    path:"/auth/register",
                    Component: Register
                }
            ]
        },
        {
            path: "/all-books",
            Component: AllBooks
        },
        {
            path: "/add-book",
            Component: AddBook
        },
        {
            path: "/my-books",
            Component: MyBooks
        },
    ]
  },
]);



export default router