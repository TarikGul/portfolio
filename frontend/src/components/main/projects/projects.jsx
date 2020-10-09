import React from 'react';
import { detectMob } from '../../../util/detect_mobile';
import '../../../styles/projects.scss';

const handleReroute = (route) => {
    window.open(route);
};

const Projects = props => {
    const mobile = detectMob();

    // I can totally refactor this so that each project is a box because I
    // am definitely repeating myself in here
    return (
        <div className='projects-container'>
            {
                mobile ?
                (
                    <div className='projects-inner-container'>
                        <div className='projects-header'>
                            Projects and Applications
                        </div>
                        <div className='projects-boxes'>
                            <div className='box-container'>
                                <span>Bimeo</span>
                                <img alt='' 
                                    src='/bimeo-page.jpg'
                                    className='image-project'
                                    onClick={() => handleReroute('https://bimeo.herokuapp.com')} />
                                <div className='project-description-container'>
                                    <div className='project-description'>
                                        Fullstack clone of Vimeo. Built on Ruby on Rails, React, Redux, webpack, PostgreSQL, and AWS. Displays full CRUD actions, RESTful API routes, database management, client-side as well as server-side file management.
                                    </div>
                                </div>
                            </div>
                            <div className='box-container'>
                                <span>Covid-415</span>
                                <img alt='' 
                                    src='/covid-415.jpg'
                                    className='image-project'
                                    onClick={() => handleReroute('https://covid415.herokuapp.com')} />
                                <div className='project-description-container'>
                                    <div className='project-description'>
                                        Built using the MERN stack, COVID415 gives San Franciscans the resources to establish a connection for help during the COVID-19 pandemic.
                                    </div>
                                </div>
                            </div>
                            <div className='box-container'>
                                <span>Sudoku-Visualizer</span>
                                <img alt='' 
                                    src='sudoku-solver.jpg'
                                    className='image-project'
                                    onClick={() => handleReroute('https://tarikgul.github.io/Sudoku-solving-visualizer/dist/')} />
                                <div className='project-description-container'>
                                    <div className='project-description'>
                                        This is a Sudoku solving visualizer. It focuses on solving the Exact Cover problem. Used in computer science and mathematics. It is studied under the NP vs P debate.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='projects-header'>
                            Other Projects and Scripts
                        </div>
                        <div className='projects-boxes'>
                            <div className='box-container'>
                                <span>GeoJson Minifier - Script</span>
                                <img alt=''
                                    src='/geojson.jpg'
                                    className='image-project'
                                    onClick={() => handleReroute('https://github.com/TarikGul/compress_geojson_coords')} />
                                <div className='project-description-container'>
                                    <div className='project-description'>
                                            This Script takes in a GeoJson file, and writes a new minified version, making sure white space is gone,
                                            decimals are reduced to appropriate accuracies, and repetetive points are cleared as well as redundant ones. I actually wrote this script for this portfolio.
                                            The map section shows all the long distance trails I have hiked. The issue was the files I received from the government were so accurate.
                                            In effect, the files were so large it complicated with the querying. <br /><br /> So I wrote this to add one more facet to the performance while maintaining the integrity
                                            of the trails.
                                    </div>
                                </div>
                            </div>
                            <div className='box-container'>
                                    <span>Steganography - Script</span>
                                <img alt=''
                                    src='/steganography-image.jpeg'
                                    className='image-project'
                                    onClick={() => handleReroute('https://github.com/TarikGul/Steganography')} />
                                <div className='project-description-container'>
                                    <div className='project-description'>
                                        This script takes in a image, and a message and returns the image with the message embedded in the pixels.
                                        I also wrote a One Time Pad Cipher as well in order to encrypt the message before embedding.
                                    </div>
                                </div>
                            </div>
                            <div className='box-container'>
                                <span>Blowfish - Clone</span>
                                <img alt=''
                                    src='/blowfish.jpg'
                                    className='image-project'
                                    onClick={() => handleReroute('https://github.com/TarikGul/cryptographic-algorithms/tree/master/javascript/blowfish')} />
                                <div className='project-description-container'>
                                    <div className='project-description'>
                                        This is a clone of Bruce Schneier's (American Cryptographer) 1993 symmetric-key block cipher Blowfish. It is used in BCRYPT, a known library and method to
                                        save and store password's in databases etc. It is based off of a Fiestel Network architecture, and is an absolute blast to learn. Jump into the repo to see more 
                                        resources, and information. I wrote one in Javascript and one in python. Feel free to explore the rest of the repo as well,
                                        as there are many other interpretations of other symmetric key ciphers.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='projects-inner-container'>
                        <div className='projects-header'>
                            Projects and Applications
                        </div>
                        <div className='projects-boxes'>
                            <div className='box-container'>
                                <img alt='' 
                                    src='/bimeo-page.jpg' 
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
                                        <div className='tech-container'>
                                            <span>React</span>
                                            <span>Redux</span>
                                            <span>Rails</span>
                                            <span>AWS</span>
                                            <span>PSQL</span>
                                            <span>HTML</span>
                                            <span>SCSS</span>
                                        </div>
                                    </div>
                                    <div className='project-links-wrapper'>
                                        <div className='link-wrapper'>
                                            <img src='/github-link.svg' className='site-link-svg' />
                                            <a href='https://github.com/TarikGul/vimeo_clone_full_stack_project' className='project-link'>
                                                Github Repo
                                            </a>
                                        </div>
                                        <div className='link-wrapper'>
                                            <img src='/link.svg' className='site-link-svg' />
                                            <a href='https://bimeo.herokuapp.com' className='project-link'>
                                                Live Site
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='box-container'>
                                <img alt='' 
                                    src='/covid-415.jpg' 
                                    className='image-project'
                                    onClick={() => handleReroute('https://covid415.herokuapp.com')}/>
                                <div className='project-right-box'>
                                    <h3 className='project-name'>
                                        Covid-415
                                    </h3>
                                    <div className='project-description-container'>
                                        <div className='project-description'>
                                            Built using the MERN stack, COVID415 gives San Franciscans the resources 
                                            to establish a connection for assistance while sheltering-in-place, during the COVID-19 pandemic.
                                            We implemented a tooling system using Mapbox's API, in order to match recipients with volunteers. 
                                            After we establish the connection, we allow the users to communicate, and confirm their transaction via the Twilio API.

                                        </div>
                                    </div>
                                    <div className='technologies'>
                                        <h4 className='technologies-header'>
                                            Technologies:
                                        </h4>
                                        <div className='tech-container'>
                                            <span>React</span>
                                            <span>Redux</span>
                                            <span>Express</span>
                                            <span>Node</span>
                                            <span>MongoDB</span>
                                            <span>HTML</span>
                                            <span>SCSS</span>
                                        </div>
                                    </div>
                                    <div className='project-links-wrapper'>
                                        <div className='link-wrapper'>
                                            <img src='/github-link.svg' className='site-link-svg' />
                                            <a href='https://github.com/emostov/covid415' className='project-link'>
                                                Github Repo
                                            </a>
                                        </div>
                                        <div className='link-wrapper'>
                                            <img src='/link.svg' className='site-link-svg'/>
                                            <a href='https://covid415.herokuapp.com' className='project-link'>
                                                Live Site
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='box-container'>
                                <img alt='' 
                                    src='sudoku-solver.jpg' 
                                    className='image-project'
                                    onClick={() => handleReroute('https://tarikgul.github.io/Sudoku-solving-visualizer/dist/')}/>
                                <div className='project-right-box'>
                                    <h3 className='project-name'>
                                        Sudoku Solver
                                    </h3>
                                    <div className='project-description-container'>
                                        <div className='project-description'>
                                            This is a Sudoku solving visualizer. It focuses on solving the Exact Cover problem. Used in computer science and mathematics it is studied under the NP vs P debate.
                                        </div>
                                    </div>
                                    <div className='technologies'>
                                        <h4 className='technologies-header'>
                                            Technologies:
                                        </h4>
                                        <div className='tech-container'>
                                            <span>Javascript</span>
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>Webpack</span>
                                        </div>
                                    </div>
                                    <div className='project-links-wrapper'>
                                        <div className='link-wrapper'>
                                            <img src='/github-link.svg' className='site-link-svg' />
                                            <a href='https://github.com/TarikGul/Sudoku-solving-visualizer' className='project-link'>
                                                Github Repo
                                            </a>
                                        </div>
                                        <div className='link-wrapper'>
                                            <img src='/link.svg' className='site-link-svg'/>
                                            <a href='https://tarikgul.github.io/Sudoku-solving-visualizer/dist/' className='project-link'>
                                                Live Site
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='projects-header'>
                            Other Projects and Scripts
                        </div>
                        <div className='projects-boxes'>
                            <div className='box-container'>
                                <img alt=''
                                    src='/geojson.jpg'
                                    className='image-project'
                                        onClick={() => handleReroute('https://github.com/TarikGul/compress_geojson_coords')} />
                                <div className='project-right-box'>
                                    <h3 className='project-name'>
                                        GeoJson Minifier - Script
                                    </h3>
                                    <div className='project-description-container'>
                                        <div className='project-description'>
                                            This Script takes in a GeoJson file, and writes a new minified version, making sure white space is gone, 
                                            decimals are reduced to appropriate accuracies, and repetetive points are cleared as well as redundant ones. I actually wrote this script for this portfolio.
                                            The map section shows all the long distance trails I have hiked. The issue was the files I received from the government were so accurate.
                                            In effect, the files were so large it complicated with the querying. <br/><br/> So I wrote this to add one more facet to the performance while maintaining the integrity
                                            of the trails. 
                                        </div>
                                    </div>
                                    <div className='technologies'>
                                        <h4 className='technologies-header'>
                                            Technologies:
                                        </h4>
                                        <div className='tech-container'>
                                            <span>Ruby</span>
                                        </div>
                                    </div>
                                    <div className='project-links-wrapper'>
                                        <div className='link-wrapper'>
                                            <img src='/github-link.svg' className='site-link-svg' />
                                                <a href='https://github.com/TarikGul/compress_geojson_coords' className='project-link'>
                                                Github Repo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='box-container'>
                                <img alt=''
                                    src='/steganography-image.jpeg'
                                    className='image-project'
                                    onClick={() => handleReroute('https://github.com/TarikGul/Steganography')} />
                                <div className='project-right-box'>
                                    <h3 className='project-name'>
                                        Steganography - Script
                                    </h3>
                                    <div className='project-description-container'>
                                        <div className='project-description'>
                                            This script takes in a image, and a message and returns the image with the message embedded in the pixels.<br/>
                                            I also wrote a One Time Pad Cipher as well in order to encrypt the message before embedding.
                                        </div>
                                    </div>
                                    <div className='technologies'>
                                        <h4 className='technologies-header'>
                                            Technologies:
                                        </h4>
                                        <div className='tech-container'>
                                            <span>Python</span>
                                        </div>
                                    </div>
                                    <div className='project-links-wrapper'>
                                        <div className='link-wrapper'>
                                            <img src='/github-link.svg' className='site-link-svg' />
                                            <a href='https://github.com/TarikGul/Steganography' className='project-link'>
                                                Github Repo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='box-container'>
                                <img alt=''
                                    src='/blowfish.jpg'
                                    className='image-project'
                                    onClick={() => handleReroute('https://github.com/TarikGul/cryptographic-algorithms/tree/master/javascript/blowfish')} />
                                <div className='project-right-box'>
                                    <h3 className='project-name'>
                                        Blowfish - Clone
                                    </h3>
                                    <div className='project-description-container'>
                                        <div className='project-description'>
                                            This is a clone of Bruce Schneier's (American Cryptographer) 1993 symmetric-key block cipher Blowfish. It is used in BCRYPT, a known library and method to
                                            save and store password's in databases etc. It is based off of a Fiestel Network architecture, and is an absolute blast to learn. Jump into the repo to see more 
                                            resources, and information. I wrote one in Javascript and one in python. Feel free to explore the rest of the repo as well,
                                            as there are many other interpretations of other symmetric key ciphers.
                                        </div>
                                    </div>
                                    <div className='technologies'>
                                        <h4 className='technologies-header'>
                                            Technologies:
                                        </h4>
                                        <div className='tech-container'>
                                            <span>Javascript</span>
                                            <span>Python</span>
                                        </div>
                                    </div>
                                    <div className='project-links-wrapper'>
                                        <div className='link-wrapper'>
                                            <img src='/github-link.svg' className='site-link-svg' />
                                            <a href='https://github.com/TarikGul/cryptographic-algorithms/tree/master/javascript/blowfish' className='project-link'>
                                                Github Repo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Projects;