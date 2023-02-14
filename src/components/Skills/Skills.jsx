import './skills.css'
import { SRC } from '../../sources'


export default function Skills() {
  return (
    <ul className='skills-list'>
      {
        SRC.skills.map((skill, i) => {
          return (
            <li className='skill' key={i}>
              <img className='skill-svg' src={skill.pic} alt={skill.lang} />
              <span className='skill-lang'>
                {skill.lang}
              </span>
            </li>
          )
        })
      }
    </ul>
  )
}