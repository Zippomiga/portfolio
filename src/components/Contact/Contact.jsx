import './contact.css'
import Link from '../Link/Link'
import { SRC } from '../../sources'

export default function Contact() {
  return (
    <section className='contact'>
      <h2 className='contact-title'>
        Contact
      </h2>
      <ul className='header-nav-social-links'>
        <Link svg={SRC.mail.svg} title='digeronimovalentin@gmail.com' url={SRC.mail.url} />
        <Link svg={SRC.github.svg} title='GitHub' url={SRC.github.url} />
        <Link svg={SRC.linkedin.svg} title='LinkedIn' url={SRC.linkedin.url} />
        <Link svg={SRC.whatsapp.svg} title='WhatsApp' url={SRC.whatsapp.url} />
      </ul>
    </section>
  )
}