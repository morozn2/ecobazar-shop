import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Homepage/Home'
import { About } from './pages/About/About'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} path='home'/>
        <Route path='about' element={<About />}/>
      </Routes>
    </>
  )
}

export default App
