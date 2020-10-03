import React, { useEffect } from 'react';
import Welcome from './welcome';
import Timeline from './timeline/timeline';
import About from './about/about';
import Resume from './resume/resume';
import Skills from './skills/skills';
import Projects from './projects/projects';
import Footer from '../footer/footer';

import { trailsAuth } from '../../config/keys_front.js';

const Main = props => {
    const { 
        adventures, 
        setPreloadingGeojson, 
        fetchGeojson, 
        setCachedGeojson 
    } = props;
    // This is for new visitors if they want to log there first time coming to 
    // the site

    // const { openModal } = props;
    useEffect(() => {
        if(adventures.preloading === false) {
            (function retrieveGeoJson(trailsAuth) {
                setCachedGeojson(true);
                fetchGeojson({ trailsAuth }).then(() => setPreloadingGeojson(true));
            })(trailsAuth)
        }
    }, []);

    return (
        <div className="main-page-container">
            <Welcome />
            <About />
            {/* <Timeline /> */}
            <Projects />
            <Skills />
            <Resume />
            <Footer position={'relative'} />
        </div>
    )
}

export default Main;