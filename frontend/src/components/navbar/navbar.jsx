import React from 'react';
import LogoButton from './logo_button';
import NavButton from './nav_button';
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
        };
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
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
                                <div onClick={this.logoutUser}>
                                    Logout
                                </div>
                            ) : (
                                null
                            )
                    }
                    <div className='light-toggle'>
                        <img src='/moon.svg' className='moon-svg'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;