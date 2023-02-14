import './home.css'
import { SRC } from '../../sources'
import Skills from '../Skills/Skills'


export default function Home() {
  return (
    <header className='header'>
      <h1 className='header-name'>
        Valentín <br /> Di Geronimo
      </h1>
      <h2 className='header-fundamental'>
        Front-End Developer
      </h2>
      <section className='header-section'>
        <p className='header-intro'>
          I am a self-taught web developer with a strong focus on writing efficient and readable code. <br />
          My passion for programming drives me to continuously improve and tackle new challenges.
        </p>
        <a href="#" className='header-cv'>
          <img src={SRC.cv.svg} alt="Resume" className='header-cv-svg' />
          CV 🡭
        </a>
      </section>
      <Skills />
    </header>
  )
}