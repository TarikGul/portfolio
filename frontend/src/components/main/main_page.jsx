import React from 'react';
import Welcome from './welcome';
import Timeline from './timeline/timeline';
import About from './about/about';
import Resume from './resume/resume'

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
                <Resume />
            </div>
        )
    }
}

export default Main;