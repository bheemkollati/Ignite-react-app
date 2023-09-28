
import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import About from "./components/About"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom"
import {Contact}  from "./components/Contact"

const AppLayout = () =>{
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement: <Error />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ]
    },
    
])

//creating a root element
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)