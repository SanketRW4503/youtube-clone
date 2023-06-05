import React, { Children } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./component/Header";
import SlideBar from "./component/SlideBar";
import Body from "./component/Body";
import { Provider, useSelector } from "react-redux";
import store from "./utility/store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoWatchFeed from "./component/VideoWatchFeed";
import SearchedVideosResult from "./component/SearchedVideosResult";
import Shorts from "./component/Shorts";



const App=()=>{

    return <>
        <Provider store={store} >
            <Header />
            <SlideBar />
            <Outlet  />
  
        </Provider>
    
    </>
}

const router=createBrowserRouter([
 {
    path:'/',
    element:<App  />,
    children:[
        {
            path:'/',
            element:<Body/>,
            
        },
        {
            path:'/watchvideo/:id',
            element:<VideoWatchFeed/>
        },
        {
            path:'/search/:query',
            element:<SearchedVideosResult/>
        },
        {
            path:'/shorts',
            element:<Shorts/>
        }
    ]
        
    
 }  
])


const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>)