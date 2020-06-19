import React from 'react';
import LogoButton from './logo_button';
import NavButton from './nav_button';
import ResumeButton from '../main/resume/resume_button';
import { detectMob } from '../../util/detect_mobile';
import '../../styles/navbar.scss';

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.reRoute = this.reRoute.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
    }

    reRoute(field) {
        const { history } = this.props;

        if (field === 'portfolio') {
            history.push('/');
        } else if (field === 'location') {
            history.push('/location');
        } else if (field === 'contact') {
            history.push('/contact');
        } else if (field === 'blog') {
            history.push('/blog');
        } else if (field === 'github') {
            window.location.href = 'https://github.com/TarikGul'
        };
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const mobile = detectMob();
        const { location, session } = this.props;
        const navs = [
            'portfolio',
            'location',
            'blog',
            'contact',
        ];
        
        return (
            <div className='navbar-container'>
                <div className='navbar-left-container'>
                    <LogoButton />
                    <div className='nav-buttons-container'>
                    {
                        navs.map((nav, i) => {
                            return <NavButton 
                            title={nav} 
                            key={`nav-${i}}`}
                            location={location}
                            reRoute={this.reRoute}/>
                        })
                    }
                    </div>
                </div>
                <div className='navbar-right-container'>
                    {
                        session.isAuthenticated ?
                            (
                                <div onClick={this.logoutUser} className='logout-button'>
                                    Logout
                                </div>
                            ) : (
                                null
                            )
                    }
                    {
                        mobile ?
                        (
                            null
                        ) : (
                            <img className='github-logo' src='/github.svg' width='41' height='41' onClick={() => this.reRoute('github')}/>
                        )
                    }
                    <ResumeButton nav={true}/>
                    {/* <div className='light-toggle'>
                        <img src='/moon.svg' className='moon-svg'/>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Navbar;