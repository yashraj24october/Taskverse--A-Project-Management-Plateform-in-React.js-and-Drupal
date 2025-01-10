import React from 'react'
import Header from './Components/Header/Header'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Homepage from './Components/Homepage'
import UserLogin from './Components/UserLogin/UserLogin'
import GettingStarted from './Components/GettingStarted/GettingStarted'
function App() {
  let Routes = createBrowserRouter([
    {
      path:'/',
      element: <Homepage/>,
      errorElement : <h2>404 NOT FOUND</h2>,
    },
    {
      path:'/user/login',
      element: <UserLogin/>,
      errorElement : <h2>404 NOT FOUND</h2>,
    },
    {
      path:'/getting-started/introduction',
      element: <GettingStarted/>,
      errorElement : <h2>404 NOT FOUND</h2>,
    }
  ])
  return (
    <>
    <RouterProvider router={Routes}/>
  </>
  )
}

export default App
