import React from 'react';
import LogoButton from './logo_button';
import NavButton from './nav_button';
import '../../styles/navbar.scss'

class Navbar extends React.Component {
    constructor(props) {
        super(props)

    }

    reRoute(field) {

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
                {
                    navs.map((nav, i) => {
                        return <NavButton 
                            title={nav} 
                            key={`nav-${i}}`}
                            location={location}/>
                    })
                }
            </div>
        )
    }
}

export default Navbar;