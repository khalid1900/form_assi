import React from 'react'
import DisplayProfile from '../components/DisplayProfile'
import Profile from '../components/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RoutesPage = () => {
  return (
    <>
    <BrowserRouter>
            <>
                    <Routes>
                        <Route path='/' element={<Profile />} />
                        <Route path='/displayProfile' element={<DisplayProfile />} />
                    </Routes>
        </>
            </BrowserRouter>
    </>
  )
}
export default RoutesPage;
