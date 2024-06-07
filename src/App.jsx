import './index.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio'
import Contacto from './pages/Contacto/Contacto'
import SobreMi from './pages/SobreMi/SobreMi'
import Skills from './pages/Skills/Skills'
import Proyectos from './pages/Proyectos/Proyectos'
import Menu from './components/Menu/Menu'
import { useEffect, useState } from 'react'
import Loader from './components/Loader'

function App() {
  
  const [Loading, setLoading] = useState(false)

  
  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])
  
  

  return (
    <div className='app__container'>
      <div className='menu__container'>
        <Menu setLoading={setLoading}/> 
      </div>
      
        {Loading && <Loader/>}
        <Routes>
            {!Loading && <Route path='/' element={<Inicio />} />}
              {!Loading && <Route path='/About' element={<SobreMi setLoading={setLoading}/>} />}
              {!Loading && <Route path='/Skills' element={<Skills/>} />}
            {!Loading && <Route path='/Projects' element={<Proyectos/>}/>}
            {!Loading && <Route path='/Contac' element={<Contacto setLoading={setLoading}/>}/>}
        </Routes>
    </div>
     
  )
}

export default App
