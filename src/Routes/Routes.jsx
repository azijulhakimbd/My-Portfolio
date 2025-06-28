import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import About from "../Pages/Home/About/About";
import Skills from "../Pages/Home/Skills/Skills";
import Projects from "../Pages/Home/Projects/Projects";
import ProjectDetails from "../Pages/Home/Projects/ProjectDetails";
import Error from "../Pages/Shared/Error/Error";
import Contact from "../Pages/Home/Contact/Contact";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index:true,
            Component: HomeLayout
        },
        {
            path:'/about',
            Component: About
        },
        {
            path:'/skills',
            Component: Skills
        },
        {
            path:'/projects',
            Component: Projects
        },
        {
            path:'/projects/:id',
            Component: ProjectDetails
        },
        {
            path:'/contact',
            Component: Contact
        }
    ]
  },
  {
    path:'/*',
    Component: Error
  }
]);
