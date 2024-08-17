import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import UserHome from './pages/UserHome';
import UserDoctor from './pages/UserDoctor';
import UserBooking from './pages/UserBooking';
import AdminHome from './pages/AdminHome';
import AdminDoctors from './pages/AdminDoctors';
import Doctors from './components/admin/Doctors';
import AdminDoctor from './pages/AdminDoctor';
import AdminBooking from './pages/AdminBooking';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>

      <Route path='/' element={<Index></Index>}></Route>
      <Route path='/user/home/' element={<UserHome></UserHome>}></Route>
      <Route path='/user/doctor/:id/' element={<UserDoctor></UserDoctor>}></Route>
      <Route path='/user/booking/' element={<UserBooking></UserBooking>}></Route>
      <Route path='/admin/home/' element={<AdminHome></AdminHome>}></Route>
      <Route path='/admin/doctor/' element={<AdminDoctors></AdminDoctors>}></Route>
      <Route path='/admin/doctor/:id/' element={<AdminDoctor></AdminDoctor>}></Route>
      <Route path='/admin/booking/' element={<AdminBooking></AdminBooking>}></Route>

      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App