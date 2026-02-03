import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Login from "./Login.jsx"
import Signup from "./Signup.jsx"
import Logout from "./Logout.jsx"
import AddCourseData from "./AddCourseData.jsx"
import AdminHome from './AdminHome.jsx'
import UserHome from "./UserHome.jsx"
import OwnCourses from "./OwnCourses.jsx"
import Edit from "./Edit.jsx"
import NotFound from "./NotFound.jsx"
import AllCourses from "./AllCourses.jsx"
import Profile from './Profile.jsx'
import Purchase from "./Purchase.jsx"
import Read from "./Read.jsx";
function App() {

  return (
    <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<Signup />} path="/signup" />
      <Route element={<Logout />} path="/logout" />
      <Route element={<AddCourseData />} path="/addcoursedata" />
      <Route element={<AdminHome/>} path="/admin/home"></Route>
      <Route element={<UserHome/>} path="/user/home"></Route>
      <Route element={<OwnCourses/>} path="/admin/owncourse"></Route>
      <Route element={<Edit />} path="/admin/edit/:id" />
          <Route element={<AllCourses />} path="/allcourses" />
      <Route element={<Profile/>} path="/admin/profile"></Route>
      <Route element={<Purchase/>} path="/user/purchase"></Route>
            <Route element={<Read/>} path="/user/purchase/read"></Route>
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  )
}

export default App
