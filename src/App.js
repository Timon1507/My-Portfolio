import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainBlock from './components/MainBlock/MainBlock'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import Slogan from './components/Slogan/Slogan'
import skillsImage1 from './images/skills-1.jpg'
import skillsImage2 from './images/skills-2.jpg'
import skillsImage3 from './images/skills-3.jpg'
import projectsImage1 from './images/projects-1.jpg'
import projectsImage2 from './images/projects-2.jpg'

const App = () => {
  let state = {
    blockTitles: [
      {title: 'Мои скиллы', isLightColorTitle: false},
      {title: 'Мои проекты', isLightColorTitle: true},
      {title: 'Контакты', isLightColorTitle: false},
    ],
    skillsBlock: [
      {image: skillsImage1, title: 'React', text: 'Since component logic is written in JavaScript instead of templ easily p easily p easily pates, you can easily pass rich data .'},
      {image: skillsImage2, title: 'Java Script', text: 'Since component logic is written in JavaScript.'},
      {image: skillsImage3, title: 'CSS', text: 'Since component logic is written in JavaScript instead of templates, you can easily.'},
    ],
    projectsBlock: [
      {image: projectsImage1, title: 'Social Network', text: 'Since component logic is written in JavaScript instead of templ easily p easily p easily pates, you can easily pass rich data .'},
      {image: projectsImage2, title: 'To Do List', text: 'Since component logic in JavaScript instead easily p easily p easily pates, you can easily pass rich data .'}
    ]
  }
  return (
    <div className="App">
      <div className='portfolio'>
        <Header />
        <MainBlock />
        <Skills data={state.skillsBlock} titleData={state.blockTitles}/>
        <Projects data={state.projectsBlock} titleData={state.blockTitles}/>
        <Slogan />
        <Contacts titleData={state.blockTitles}/>
        <Footer />
      </div>
    </div>
  )
}

export default App
