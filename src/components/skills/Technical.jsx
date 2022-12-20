import React from 'react'

const Technical = () => {
  return (
    <div className="skills__content" style={{float:"right"}}>
        <h3 className="skills__title">Technical Skills</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div className="skills__text">
                        <h3 className="skills__name">HTML, CSS, JS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div className='skills__text'>
                        <h3 className="skills__name">MySQL, ReactJS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div className='skills__text'>
                        <h3 className="skills__name">NodeJS, PHP</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div className='skills__text'>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div className='skills__text'>
                        <h3 className="skills__name">Python, R</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div className='skills__text'>
                        <h3 className="skills__name">Tensorflow</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technical