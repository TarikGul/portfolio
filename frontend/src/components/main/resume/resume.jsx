import React from 'react';

const Resume = props => {

    return (
        <div className="resume-container">
            <div className="resume-inner-container">
                <div className="download-header">
                    Download My Resume
                </div>
                <a href="/Tariks-Resume.pdf" download> 
                    <button>
                        Resume
                    </button> 
                </a>
            </div>
        </div>
    )
}

export default Resume;