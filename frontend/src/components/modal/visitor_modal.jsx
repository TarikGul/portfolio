import React from 'react';
import '../../styles/modal.scss'

class VisitorModal extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='visitor-modal-container'>
                <div className='visitor-modal-welcome'>
                    Welcome
                </div>
                <div className='visiot-modal-content'>

                </div>
            </div>
        )
    };
}

export default VisitorModal;