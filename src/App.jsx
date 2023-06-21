// Rutas
import { Route, Routes, useLocation } from 'react-router-dom'
// STYLE
import './App.css'
// COMPONENTES
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PokedexName from './pages/PokedexName'
// HOOKS
import { useEffect, useState } from 'react'


function App() {
  const [isLoading, setIsLoading] = useState(true) //pantalla de carga

  const location = useLocation() // para sabar cuando cambiamos de ruta

  useEffect(()=> { 
    setIsLoading(true)
    const timer = setTimeout(()=> {
      setIsLoading(false)
    },1000)
    return () => {
      clearTimeout(timer)
    }
  },[location]) // se ejecuta en la primera carga y cada que cambiamos de ruta

  return (
    <div className={`content ${isLoading ? 'animationCarga' : ''}`}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route element={<ProtectedRoutes/>}>
              <Route path='/pokedex' element={<Pokedex/>} />
              <Route path='/pokedex/:name' element = {<PokedexName/>}/>
            </Route>
          </Routes>
    </div>
  )
}

export default App
