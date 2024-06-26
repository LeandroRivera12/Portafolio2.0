import React from 'react'
import './Skills.css'
import CardSkills from '../../components/Carrousel/CardSkills'

const Skills = () => {
  return (
    <div className='skills'>
      <div className='skills-header'>
        <h1 className='skills-title'>Mis Servicios</h1>
        <p className='skills-description'>Cuento con amplio conocimiento sobre diferentes tecnologias incluyendo: 
        </p>
        <ul className='skills-list'>
          <li className='skills-item'>HTML5</li>
          <li className='skills-item'>CSS3</li>
          <li className='skills-item'>JavaScript</li>
          <li className='skills-item'>ReactJS</li>
          <li className='skills-item'>NodeJS</li>
          <li className='skills-item'>Git Bash</li>
        </ul>
      </div>
      <div className='skills__cards'>
        <CardSkills/>
      </div>
    </div>
  )
}

export default Skills