import './projects.css'
import { SRC } from '../../sources'
import { useEffect, useState } from 'react'


export default function Projects() {
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState(screen.width)

  const project = SRC.projects[index]

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(screen.width))
  }, [width])

  return (
    <section className='projects-section'>
      <h2 className='projects-title'>
        Projects
      </h2>
      <div className='projects-div'>
        <nav className='navbar-pics'>
          {
            SRC.projects.map((project, i) => {
              return (
                <img
                  className='pic'
                  src={project.picture(width)}
                  alt={project.name}
                  key={i}
                  onClick={() => setIndex(i)}
                />
              )
            })
          }
        </nav>
        <a href={project.url} target="_blank" className='project-picture'>
          <img
            src={project.picture(width)}
            alt={project.name}
            className='illustration'
          />
          {project.name}
        </a>
      </div>
    </section>
  )
}