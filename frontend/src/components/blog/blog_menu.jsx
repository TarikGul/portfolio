import React from 'react';
import ReactCSSTransitionGroup from 'react-transition-group';

class BlogMenu extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    Hi <br/>
                    Bye <br/>
                    Hello <br/>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
};

export default BlogMenu;