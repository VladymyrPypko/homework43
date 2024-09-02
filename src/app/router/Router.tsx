import { ReactNode } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { About, Album, Albums, Home } from "../../pages";



export default function Router({children}: {children: ReactNode}) {
  return (
    <BrowserRouter basename="/">
      {children}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/albums' element={<Albums></Albums>}></Route>
        <Route path='/albums/:id' element={<Album></Album>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  )
}