import React from 'react';
import { detectMob } from '../../../util/detect_mobile';

const ResumeButton = props => {
    let mobile = detectMob();
    return (
        <a href='/Tariks-Resume.pdf' download> 
            {
                mobile ? 
                (
                    <button className='resume-button-nav'>
                        Resume
                    </button>
                ) : (
                    <button className='resume-button'>
                        Resume
                    </button>
                )
            }          
        </a>
    )
}

export default ResumeButton;