import React from 'react';

const Projects = props => {
    return (
        <div className='projects-container'>
            <div className='projects-inner-container'>
                <div className='bimeo-container'>
                    Bimeo
                    <img src='/bimeo-page.png' className='bimeo-project'/>
                </div>
                <div className='covid-container'>
                    Covid-415
                    <img src="" alt=""/>
                </div>
                <div className='sudoku-container'>
                    Sudoku-Visualizer
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Projects;