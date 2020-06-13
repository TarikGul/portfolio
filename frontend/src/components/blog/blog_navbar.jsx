import React from 'react';
import BlogNavIcon from './navbar_icon';

class BlogNavbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            fade: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.setState(prevState => ({ open: !prevState.open }))
    }

    render() {
        const { open } = this.state;
        return (
            <div className='blog-navbar-container'>
                {
                    open ? 
                    (    
                        <BlogNavIcon />
                    ) : (
                        <BlogNavIcon />
                    )
                }
            </div>
        )
    }
}

export default BlogNavbar;
