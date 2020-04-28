import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/projects.scss';

const handleReroute = (route) => {
    window.location.href = route
}

const Projects = props => {
    return (
        <div className='projects-container'>
            <div className='projects-inner-container'>
                <div className='projects-header'>
                    Projects
                </div>
                <div className='projects-boxes'>
                    <div className='box-container'>
                        Bimeo
                        <img src='/bimeo-page.png' 
                             className='image-project'
                             onClick={() => handleReroute('https://bimeo.herokuapp.com')}/>
                    </div>
                    <div className='box-container'>
                        Covid-415
                        <img src='/covid-415.png' 
                             className='image-project'
                             onClick={() => handleReroute('https://covid415.herokuapp.com')}/>
                    </div>
                    <div className='box-container'>
                        Sudoku-Visualizer
                        <img src='sudoku-solver.png' 
                             className='image-project'
                             onClick={() => handleReroute('https://tarikgul.github.io/Sudoku-solving-visualizer/dist/')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;