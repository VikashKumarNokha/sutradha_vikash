import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Method1 } from './Method1'
import { Method2 } from './Method2'

export const MainRoute = () => {
  return (
    <div>
   <Routes>
    <Route path='/' element = {<Home/>}/>
     <Route path="/method1" element={<Method1/>} />
     <Route path="/method2" element={<Method2/>} />
     <Route path="*" element={<h3>Page Not Found</h3>} />
  </Routes>
    </div>
  )
}
