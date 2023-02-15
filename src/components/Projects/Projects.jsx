import './projects.css'
import { SRC } from '../../sources'
import { useEffect, useState } from 'react'


export default function Projects() {
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState(screen.width)

  const page = SRC.projects[index]

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
                width > 425 ? (
                  <button onClick={() => setIndex(i)}>
                    <img
                      className='pic'
                      src={project.picture(width)}
                      alt={project.name}
                      key={i}
                    />
                  </button>
                ) : (
                  <a href={project.url}>
                    <img
                      className='pic'
                      src={project.picture(width)}
                      alt={project.name}
                      key={i}
                    />
                  </a>
                )
              )
            })
          }
        </nav>
        {
          width > 425 && (
            <a href={page.url} target="_blank" className='project-picture'>
              <img
                src={page.picture(width)}
                alt={page.name}
                className='illustration'
              />
              {page.name}
            </a>
          )
        }
      </div>
    </section>
  )
}