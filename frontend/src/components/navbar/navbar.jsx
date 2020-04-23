import React from 'react';
import LogoButton from './logo_button';
import NavButton from './nav_button';
import '../../styles/navbar.scss'

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.reRoute = this.reRoute.bind(this);
    }

    reRoute(field) {
        const { history } = this.props;

        if (field === 'portfolio') {
            history.push('/');
        } else if (field === 'location') {
            history.push('/location');
        } else if (field === 'contact') {
            history.push('/contact');
        };
    }

    render() {
        const { location } = this.props;
        const navs = [
            'portfolio',
            'location',
            'contact'
        ];

        return (
            <div className="navbar-container">
                <LogoButton />
                <div className="nav-buttons-container">
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
        )
    }
}

export default Navbar;