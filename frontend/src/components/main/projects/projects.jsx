import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/projects.scss';

const handleReroute = (route) => {
    window.open(route);
};

const Projects = props => {
    return (
        <div className='projects-container'>
            <div className='projects-inner-container'>
                <div className='projects-header'>
                    Projects and Applications
                </div>
                <div className='projects-boxes'>
                    <div className='box-container'>
                        <span>Bimeo</span>
                        <img src='/bimeo-page.png' 
                             className='image-project'
                             onClick={() => handleReroute('https://bimeo.herokuapp.com')}/>
                        <div className='project-description'>
                            
                        </div>
                    </div>
                    <div className='box-container'>
                        <span>Covid-415</span>
                        <img src='/covid-415.png' 
                             className='image-project'
                             onClick={() => handleReroute('https://covid415.herokuapp.com')}/>
                    </div>
                    <div className='box-container'>
                        <span>Sudoku-Visualizer</span>
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