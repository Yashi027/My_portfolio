import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'

function App() {

  return (
    <div className='bg-gradient-to-r from-cyan-600 to-blue-500'>
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
