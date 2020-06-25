import React from 'react';
import Welcome from './welcome';
import Timeline from './timeline/timeline';
import About from './about/about';
import Resume from './resume/resume';
import Skills from './skills/skills';
import Projects from './projects/projects';
import Footer from '../footer/footer';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { openModal } = this.props;

        // openModal('welcome-visitor');
    }

    render() {
        return (
            <div className="main-page-container">
                <Welcome />
                <About />
                <Timeline />
                <Projects />
                <Skills />
                <Resume />
                <Footer />
            </div>
        )
    }
}

export default Main;