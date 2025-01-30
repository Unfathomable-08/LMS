import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ForgetPassword from './Pages/ForgetPassword'
import { UserName, PopUpOpened, UserPosition, UserEmail } from './Context'
import ChangePassword from './Pages/ChangePassword'
import Lead from './Pages/Lead'
import AdminPanel from './Pages/AdminPanel'
import Developer from './Pages/Developer'

const App = () => {
  const [userName, setUserName] = useState('');
  const [userPosition, setUserPosition] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isPopUpOpened, setIsPopUpOpened] = useState(false);

  useEffect(()=>{
    if (isPopUpOpened){
      document.body.classList.add('no-scroll');
    }
    else {
      document.body.classList.remove('no-scroll');
    }
  },[isPopUpOpened])

  return (
    <>
      <UserEmail.Provider value={[userEmail, setUserEmail]}>
        <UserPosition.Provider value={[userPosition, setUserPosition]}>
          <PopUpOpened.Provider value={[isPopUpOpened, setIsPopUpOpened]}>
            <UserName.Provider value={[userName, setUserName]}>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/signup' element={<Signup/>}/>
                  <Route path='/forgetPassword' element={<ForgetPassword/>}/>
                  <Route path='/resetPassword' element={<ChangePassword/>}/>
                  <Route path='/lead/addProject' element={<Lead/>}/>
                  <Route path='/admin' element={<AdminPanel/>}/>
                  <Route path='/developer' element={<Developer/>}/>
                </Routes>
              </BrowserRouter>
            </UserName.Provider>
          </PopUpOpened.Provider>
        </UserPosition.Provider>
      </UserEmail.Provider>
    </>
  )
}

export default App