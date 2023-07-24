import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import CollegeDetails from "../Pages/Home/FeaturedColleges/CollegeDetails";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import PrivetRoute from "./PrivetRoute";
import ResetPassword from "../Pages/Login/ResetPassword";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'colleges',
        element: <Colleges></Colleges>
      },
      {
        path: 'admission',
        element: <Admission></Admission>
      },
      {
        path: 'myCollege',
        element: <MyCollege></MyCollege>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      },
      {
        path: '/profile/:email',
        element: <Profile></Profile>
      },
      {
        path: '/CollegeDetails/:id',
        element: <PrivetRoute><CollegeDetails></CollegeDetails></PrivetRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/college/details/${params.id}`)
      },
      {
        path: 'resetPassword',
        element: <ResetPassword></ResetPassword>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }

]);

export default router;