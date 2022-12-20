import React from 'react'
import './skills.css'
import Soft from './Soft'
import Technical from './Technical'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title"  style={{"padding-top":"50px"}}>Skills</h2>
        <span className="section__subtitle">My Proficiency Level and Personal skills</span>

        <div className="skills__container grid"> 
            <Technical />
            <Soft />
        </div>  

    </section>
  )
}

export default Skills