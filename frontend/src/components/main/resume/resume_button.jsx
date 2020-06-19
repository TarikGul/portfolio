import React from 'react';
import { detectMob } from '../../../util/detect_mobile';

const ResumeButton = props => {
    let mobile = detectMob();
    const isNav = props.nav;
    return (
        <a href='/Tariks-Resume.pdf' download> 
            {
                mobile ? 
                (
                    isNav ? 
                    (
                        <button className='resume-button-nav'>
                            Resume
                        </button>
                    ) : (
                        <button className='resume-button'>
                            Resume
                        </button>
                    )
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