import React from 'react';

const NavButton = props => {
    const { title, reRoute, location } = props;
    return (
        <div className="navbar-button-container" onClick={() => reRoute(title)}>
            {
                location.pathname === `/${title}` || 
                (location.pathname === '/' && title === 'portfolio') ?
                (
                    <div className='current-nav-button'>
                        {title}
                    </div>
                ) : (
                    <div className='nav-button'>
                        {title}
                    </div>
                )
            }
        </div>
    )
}

export default NavButton