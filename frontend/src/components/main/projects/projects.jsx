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
                        <img src='/bimeo-page.png' 
                             className='image-project'
                             onClick={() => handleReroute('https://bimeo.herokuapp.com')}/>
                        <div className='project-right-box'>
                            <h3 className='project-name'>
                                Bimeo
                            </h3>
                            <div className='project-description-container'>
                                <div className='project-description'>
                                    Fullstack clone of Vimeo. Built on Ruby on Rails, React, Redux, webpack, PostgreSQL. Displays full CRUD actions, RESTful API routes, and database management. 
                                </div>
                            </div>
                            <div className='technologies'>
                                <h4 className='technologies-header'>
                                    Technologies:
                                </h4>
                                <span>React</span>
                                <span>Redux</span>
                                <span>Rails</span>
                                <span>AWS</span>
                                <span>PostgreSQL</span>
                                <span>HTML</span>
                                <span>SCSS</span>
                            </div>
                            <div className='project-links-wrapper'>
                                <div className='link-wrapper'>
                                    <img src='/github-link.svg' className='site-link-svg' />
                                    <a href="" className='project-link'>
                                        Github Repo
                                    </a>
                                </div>
                                <div className='link-wrapper'>
                                    <img src='/link.svg' className='site-link-svg' />
                                    <a href="" className='project-link'>
                                        Live Site
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='box-container'>
                        <img src='/covid-415.png' 
                             className='image-project'
                             onClick={() => handleReroute('https://covid415.herokuapp.com')}/>
                        <div className='project-right-box'>
                            <h3 className='project-name'>
                                Covid-415
                            </h3>
                            <div className='project-description-container'>
                                <div className='project-description'>
                                    Built using the MERN stack, COVID415 gives San Franciscan's the resources 
                                    to establish a connection for assistance while sheltering-in-place, during the Corona virus pandemic.
                                    We implemented a tooling system using Mapbox's API, in order to match recipients with volunteers. 
                                    After we establish the connection, we allow the users to communicate, and confirm there transaction via the Twilio Api.

                                </div>
                            </div>
                            <div className='technologies'>
                                <h4 className='technologies-header'>
                                    Technologies:
                                </h4>
                                <span>React</span>
                                <span>Redux</span>
                                <span>Express</span>
                                <span>Node</span>
                                <span>MongoDB</span>
                                <span>HTML</span>
                                <span>SCSS</span>
                            </div>
                            <div className='project-links-wrapper'>
                                <div className='link-wrapper'>
                                    <img src='/github-link.svg' className='site-link-svg' />
                                    <a href="" className='project-link'>
                                        Github Repo
                                    </a>
                                </div>
                                <div className='link-wrapper'>
                                    <img src='/link.svg' className='site-link-svg'/>
                                    <a href="" className='project-link'>
                                        Live Site
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='box-container'>
                        <img src='sudoku-solver.png' 
                             className='image-project'
                             onClick={() => handleReroute('https://tarikgul.github.io/Sudoku-solving-visualizer/dist/')}/>
                        <div className='project-right-box'>
                            <h3 className='project-name'>
                                Sudoku Solver
                            </h3>
                            <div className='project-description-container'>
                                <div className='project-description'>
                                    This is a Sudoku solving visualizer. It focus's on solving the Exact Cover problem. Used in computer science and mathematics it is studied under the NP vs P debate.
                                </div>
                            </div>
                            <div className='technologies'>
                                <h4 className='technologies-header'>
                                    Technologies:
                                </h4>
                                <span>Javascript</span>
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                            <div className='project-links-wrapper'>
                                <div className='link-wrapper'>
                                    <img src='/github-link.svg' className='site-link-svg' />
                                    <a href="" className='project-link'>
                                        Github Repo
                                    </a>
                                </div>
                                <div className='link-wrapper'>
                                    <img src='/link.svg' className='site-link-svg'/>
                                    <a href="" className='project-link'>
                                        Live Site
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;