import './normalize.css'
import './app.css'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

export default function App() {
  return (
    <main>
      <Home />
      <Projects />
      <Contact />
    </main>
  )
}