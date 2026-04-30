import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'

function App() {
  return (
      <main className="page">
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
      </main>
  )
}

export default App