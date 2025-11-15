import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Register from "../Pages/Auth/Register";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login";
import AllBooks from "../Pages/AllBooks/AllBooks";
import AddBook from "../Pages/AddBook/AddBook";
import MyBooks from "../Pages/MyBooks/MyBooks";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";
import Loader from "../Loader/Loader";



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
            path: "/all-books",
            Component: AllBooks,
        },
        {
            path: "/add-book",
            element: <PrivateRoute>
                <AddBook></AddBook>
            </PrivateRoute>
 
        },
        {
            path: "/my-books",
            element: <PrivateRoute>
                <MyBooks></MyBooks>
            </PrivateRoute>
            
        },
        {
            path:"/book-details/:id",
            loader: ({params}) => fetch(`http://localhost:3000/books/${params.id}`),
            element: <PrivateRoute>
                <BookDetails></BookDetails>
            </PrivateRoute>,
            hydrateFallbackElement: <Loader></Loader>
        }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
        {
            path:"/auth/login",
            Component: Login
        },
        {
            path:"/auth/register",
            Component: Register
        },
    ]
  },
  {
    path: '/*',
    Component: ErrorPage
  }
]);



export default router