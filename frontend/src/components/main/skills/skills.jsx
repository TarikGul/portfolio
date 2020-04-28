import React from 'react';
import '../../../styles/skills.scss'

const Skills = props => {

    return (
        <div className='skills-container'>
            <div className='skills-inner-container'>
                <div className='skills-header'>
                    Skills and Technologies
                </div>
                <div className='skills-logo-container'>
                    <div className='node-container'>
                        <img className='skills-icon' src='/nodejs-icon.svg' />
                        Node
                    </div>
                    <div className='react-container'>
                        <img className='skills-icon' src='/react.svg' />
                        React
                    </div>
                    <div className='redux-container'>
                        <img className='skills-icon' src='/redux.svg' />
                        Redux
                    </div>
                    <div className='rails-container'>
                        <img className='skills-icon' src='/rails.svg' />
                        Rails
                    </div>
                    <div className='javascript-container'>
                        <img className='skills-icon' src='/javascript.svg' />
                        Javascript
                    </div>
                    <div className='html-container'>
                        <img className='skills-icon' src='/html-5.svg' />
                        HTML 5
                    </div>
                    <div className='css-container'>
                        <img className='skills-icon' src='/css3.svg' />
                        CSS 3
                    </div>
                    <div className='mongo-container'>
                        <img className='skills-icon' src='/mongodb-icon.svg' />
                        MongoDB
                    </div>
                    <div className='postgres-container'>
                        <img className='skills-icon' src='/postgresql.svg' />
                        PostgreSQL
                    </div>
                    <div className='python-container'>
                        <img className='skills-icon' src='/python-5.svg' />
                        Python
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;