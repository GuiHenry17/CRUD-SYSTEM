import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Listar from './pages/Listar'
import Home from './pages/Home'
import Registrar from './pages/Registro'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/listar" element={<Listar/>}/>
            <Route path='/registro' element={<Registrar/>}/>
       </Routes>
    </BrowserRouter>
  </StrictMode>,
)
