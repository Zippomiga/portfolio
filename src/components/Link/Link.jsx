import './link.css'

export default function Link({ svg, title, url }) {
  return (
    <li>
      <img src={svg} alt={title} className='social-link-svg' />
      <a href={url} className="social-link" target="_blank">
        {title}
      </a>
    </li>
  )
}