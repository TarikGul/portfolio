import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { openModal } = this.props;
    }

    render() {
        return (
            <div>
                React is awesome
            </div>
        )
    }
}

export default Main;