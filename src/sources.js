import hangMan_D from './assets/hangman.png'
import desEncriptador_D from './assets/des-encriptador.png'
import interactiveCards_D from './assets/interactive-cards.png'
import spaceTourism_D from './assets/space-tourism.png'
import whatAlbum_D from './assets/what-album.png'

import hangMan_M from './assets/hangman-mobile.png'
import desEncriptador_M from './assets/des-encriptador-mobile.png'
import interactiveCards_M from './assets/interactive-cards-mobile.png'
import spaceTourism_M from './assets/space-tourism-mobile.png'
import whatAlbum_M from './assets/what-album-mobile.png'

import CV_SVG from './assets/resume.svg'
import github_SVG from './assets/github.svg'
import linkedin_SVG from './assets/linkedin.svg'
import mail_SVG from './assets/gmail.svg'
import whatsapp_SVG from './assets/whatsapp.svg'

import html_SVG from './assets/html5.svg'
import css_SVG from './assets/css3.svg'
import javascript_SVG from './assets/javascript.svg'
import git_SVG from './assets/git.svg'
import react_SVG from './assets/react.svg'
import python_SVG from './assets/python.svg'


const screen = (width = 768, desktop, mobile) => width > 425 ? desktop : mobile


export const SRC = {
  github: {
    url: "https://github.com/Zippomiga",
    svg: github_SVG
  },
  linkedin: {
    url: "https://www.linkedin.com/in/digeronimovalentin/",
    svg: linkedin_SVG
  },
  mail: {
    url: "https://accounts.google.com/v3/signin/identifier?dsh=S-401705353%3A1675393580541585&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHeoltqyQsqkhNmmqSUrN79yW1FzOPlt6qSfQqrLMpyqZljTRj1g0wipQTDUG5rhhEuy7uQSjQ",
    svg: mail_SVG
  },
  whatsapp: {
    url: "https://api.whatsapp.com/send?phone=541168904100&text=%20",
    svg: whatsapp_SVG
  },
  cv: {
    url: "",
    svg: CV_SVG
  },
  projects: [
    {
      name: 'What Album',
      url: "https://zippomiga.github.io/what-album/",
      picture: (width) => screen(width, whatAlbum_D, whatAlbum_M)
    },
    {
      name: 'Space Tourism',
      url: "https://zippomiga.github.io/space-tourism/",
      picture: (width) => screen(width, spaceTourism_D, spaceTourism_M)
    },
    {
      name: 'Hangman Game',
      url: "https://zippomiga.github.io/hangman-game/",
      picture: (width) => screen(width, hangMan_D, hangMan_M)
    },
    {
      name: 'Interactive Cards',
      url: "https://zippomiga.github.io/interactive-cards/",
      picture: (width) => screen(width, interactiveCards_D, interactiveCards_M)
    },
    {
      name: 'Des-Encriptador',
      url: "https://zippomiga.github.io/des-encriptador/",
      picture: (width) => screen(width, desEncriptador_D, desEncriptador_M)
    }
  ],
  skills: [
    {
      lang: 'React',
      pic: react_SVG
    },
    {
      lang: 'JavaScript',
      pic: javascript_SVG
    },
    {
      lang: 'CSS',
      pic: css_SVG
    },
    {
      lang: 'HTML',
      pic: html_SVG
    },
    {
      lang: 'Git',
      pic: git_SVG
    },
    {
      lang: 'Python',
      pic: python_SVG
    },
  ]
}