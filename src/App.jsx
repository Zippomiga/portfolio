import './normalize.css'
import './app.css'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

export default function App() {
  return (
    <main>
      <Header />
      <Projects />
      <Contact />
    </main>
  )
}