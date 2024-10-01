import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Error from './Content/Pages/Error/Error'
import App from "./App";
import Home from "./Content/Pages/Home/Home";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} errorElement={<Error />} >
            <Route index element={<Home />} />

            <Route path="*" loader={() => { throw { status: 404, message: 'Page Not Found' } }} />
        </Route>
    )
);