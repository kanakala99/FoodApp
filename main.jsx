import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Body from './components/body'
import About from './components/About'
import RestauranteMenu from './components/RestauranteMenu.jsx'
import { createBrowserRouter,RouterProvider
} from 'react-router-dom';

const appRouter=createBrowserRouter([
 {
   path:'/',
   element:<App/>,
   children:[
    {
      path:'/about',
      element:<About/>,
    },
    {
      path:'/',
      element:<Body/>,
    },
    {
      path:"/restaurents/:resid",
      element:<RestauranteMenu/>
    }
   ]
 }
 
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)



