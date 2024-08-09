import React ,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";

import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

// import About from "./components/About";
// Using lazy loading, code splitting, dynamic routing, chunking, on demand loading
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        "path": "/",
        "element": <AppLayout/>,
        "children": [
            {
                "path": "/",
                "element": <Body/>
            },
            {
                "path": "/contact",
                "element": <Contact/>
            },
            {
                "path": "/about",
                "element": <Suspense><About/></Suspense>
            },
            {
                "path": "/restaurant/:resId",
                "element": <RestaurantMenu/>
            },
        ],
        "errorElement": <Error/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

/*root.render(<AppLayout/>);*/

root.render(<RouterProvider router={appRouter}/>);