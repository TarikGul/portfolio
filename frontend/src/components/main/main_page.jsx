import React from 'react';
import Welcome from './welcome';
import Timeline from './timeline/timeline';
import About from './about/about';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { openModal } = this.props;
    }

    render() {
        return (
            <div className="main-page-container">
                <Welcome />
                <About />
                <Timeline />
            </div>
        )
    }
}

export default Main;