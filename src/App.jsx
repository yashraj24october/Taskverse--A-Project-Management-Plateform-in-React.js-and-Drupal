import React from 'react'
import Header from './Components/Header/Header'
import './App.css'
import './form-style.css'
import './font.css'
import './DocumentEditor.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Homepage from './Components/Homepage'
import UserLogin from './Components/UserLogin/UserLogin'
import GettingStarted from './Components/GettingStarted/GettingStarted'
import AddProjectInfoForm from './Components/AddProjectInfoForm/AddProjectInfoForm'
import AddTaskForm from './Components/AddTaskForm/AddTaskForm'
import AddDocumentation from './Components/AddDocumentation/AddDocumentation'
import AddCodeSnippets from './Components/AddCodeSnippets/AddCodeSnippets'
import AddIssues from './Components/AddIssues/AddIssues'
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
    },
    {
      path:'/add/project-info',
      element: <AddProjectInfoForm/>,
      errorElement : <h2>404 NOT FOUND</h2>,
    },
    {
      path:'/add/task',
      element: <AddTaskForm/>,
      errorElement : <h2>404 NOT FOUND</h2>,
    },
    {
      path:'/add/documentation',
      element: <AddDocumentation/>,
      errorElement : <h2>404 NOT FOUND</h2>,
    },
    {
      path:'/add/code-snippets',
      element: <AddCodeSnippets/>,
      errorElement : <h2>404 NOT FOUND</h2>,
    },
    {
      path:'/add/question',
      element: <AddIssues/>,
      errorElement : <h2>404 NOT FOUND</h2>,
    },
  
  ])

  return (
    <>
    <RouterProvider router={Routes}/>

  </>
  )
}

export default App
