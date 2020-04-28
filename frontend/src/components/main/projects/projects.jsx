import React from 'react';
import '../../../styles/projects.scss';

const Projects = props => {
    return (
        <div className='projects-container'>
            <div className='projects-inner-container'>
                <div className='projects-header'>
                    Projects
                </div>
                <div className='projects-boxes'>
                    <div className='bimeo-container'>
                        Bimeo
                        <img src='/bimeo-page.png' className='image-project'/>
                    </div>
                    <div className='covid-container'>
                        Covid-415
                        <img src='/covid-415.png' className='image-project'/>
                    </div>
                    <div className='sudoku-container'>
                        Sudoku-Visualizer
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;