import React from 'react';

const ResumeButton = props => {
    return (
        <a href='/Tariks-Resume.pdf' download>
            <button className='resume-button'>
                Resume
            </button>
        </a>
    )
}

export default ResumeButton;