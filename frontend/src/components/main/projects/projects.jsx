import React from 'react';
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
                        <div className='project-description-container'>
                            <div className='project-description'>
                                Fullstack clone of Vimeo. Built on Ruby on Rails, React, Redux, webpack, PostgreSQL. Displays full CRUD actions, RESTful API routes, and database management. 
                            </div>
                        </div>
                    </div>
                    <div className='box-container'>
                        <span>Covid-415</span>
                        <img src='/covid-415.png' 
                             className='image-project'
                             onClick={() => handleReroute('https://covid415.herokuapp.com')}/>
                        <div className='project-description-container'>
                            <div className='project-description'>
                                Built using the MERN stack, COVID415 gives San Franciscan's the resources to establish a connection for help during the coronavirus pandemic.
                            </div>
                        </div>
                    </div>
                    <div className='box-container'>
                        <span>Sudoku-Visualizer</span>
                        <img src='sudoku-solver.png' 
                             className='image-project'
                             onClick={() => handleReroute('https://tarikgul.github.io/Sudoku-solving-visualizer/dist/')}/>
                        <div className='project-description-container'>
                            <div className='project-description'>
                                This is a Sudoku solving visualizer. It focus's on solving the Exact Cover problem. Used in computer science and mathematics it is studied under the NP vs P debate.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;