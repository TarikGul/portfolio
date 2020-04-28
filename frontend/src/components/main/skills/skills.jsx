import React from 'react';
import '../../../styles/skills.scss'

const Skills = props => {

    return (
        <div className='skills-container'>
            <div className='skills-inner-container'>
                <div className='node-container'>
                    <img className='node-icon' src='/nodejs-icon.svg' />
                    Node
                </div>
                <div className='react-container'>
                    <img className='react-icon' src='/react.svg' />
                    React
                </div>
                <div className='redux-container'>
                    <img className='redux-icon' src='/redux.svg' />
                    Redux
                </div>
                <div className='rails-container'>
                    <img className='rails-icon' src='/rails.svg' />
                    Rails
                </div>
                <div className='javascript-container'>
                    <img className='javascript-icon' src='/javascript.svg' />
                    Javascript
                </div>
                <div className='html-container'>
                    <img className='html-icon' src='/html-5.svg' />
                    HTML 5
                </div>
                <div className='css-container'>
                    <img className='css-icon' src='/css3.svg' />
                    CSS 3
                </div>
                <div className='mongo-container'>
                    <img className='mongo-icon' src='/mongodb-icon.svg' />
                    MongoDB
                </div>
                <div className='postgres-container'>
                    <img className='postgres-icon' src='/postgresql.svg' />
                    PostgreSQL
                </div>
                <div className='python-container'>
                    <img className='python-icon' src='/python-5.svg' />
                    Python
                </div>
            </div>
        </div>
    )
};

export default Skills;