import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import VisitorModalContainer from './visitor_modal_container';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    close() {
        this.props.closeModal();
    }

    render() {
        const { modal, closeModal } = this.props;

        if (!modal) {
            return null;
        }

        let component;
        let childClass;

        switch (modal.modal) {
            case 'welcome-visitor':
                component = <VisitorModalContainer />;
                childClass = "modal-child-visitor"
                break;
            default:
                return null;
        }

        return (
            <div className="modal-background" onClick={closeModal}>
                <div className={childClass} onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        )
    }
}

const msp = (state) => {
    return {
        modal: state.ui.modal
    }
}

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(
    msp,
    mdtp
)(Modal);