import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'

function App() {

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-600 via-cyan-600 to-cyan-500'>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>     
    </div>
  )
}

export default App
