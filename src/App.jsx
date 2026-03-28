import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-600 via-cyan-600 to-cyan-500'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>           
    </div>
  )
}

export default App
