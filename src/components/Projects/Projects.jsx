import './backgrounds.css'
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
                width > 425 ?
                  <button
                    onClick={() => setIndex(i)}
                    className={project.bg}
                    key={i}
                  /> :
                  <a
                    href={project.url}
                    target='_blank'
                    className={project.bg}
                    key={i}
                  />
              )
            })
          }
        </nav>
        {
          width > 425 &&
          <a
            href={page.url}
            target='_blank'
            className={page.bg}
          >
            <span className='project-name'>
              {page.name}
            </span>
          </a>
        }
      </div>
    </section>
  )
}