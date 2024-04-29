import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import Headers from './components/Headers'
import Dashboard from './components/Dashboard'
import Error from './components/Error'
export default function App() {
  return (
<>
<Headers />
<Routes>
  <Route path='/' element={<Home />} ></Route>
  <Route path='/login' element={<Login />} ></Route>
  
  <Route path='/*' element={<Error />} ></Route>
  <Route path='/dashboard' element={<Dashboard />} ></Route>

</Routes>

</>
  )
}
