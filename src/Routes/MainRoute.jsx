import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import CollegeDetails from "../Pages/Home/FeaturedColleges/CollegeDetails";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";

const router = createBrowserRouter([
   {
    path:'/',
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
      }
    ]
   },
      {
        path: '/CollegeDetails/:id',
        element:<CollegeDetails></CollegeDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/college/details/${params.id}`)
      }
  ]);

  export default router;