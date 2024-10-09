import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Error from './Content/Pages/Error/Error'
import App from "./App";
import Home from "./Content/Pages/Home/Home";
import About from "./Content/Pages/About/About";
import Services from "./Content/Pages/Services/Services";
import Internships from "./Content/Pages/Internships/Internships";
import Contact from "./Content/Pages/Contact/Contact";
import LandingBG from "./Content/Pages/Home/Components/LandingBG";
import Blogs from "./Content/Pages/Blogs/Blogs";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} errorElement={<Error />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="internships" element={<Internships />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />


            <Route path="*" loader={() => { throw { status: 404, message: 'Page Not Found' } }} />
        </Route>
    )
);