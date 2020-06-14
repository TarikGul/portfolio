import React from 'react';
import BlogNavIcon from './navbar_icon';

class BlogNavbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }

        // this.wrapperRed = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();


        // const wrapper = this.wrapperRef.current;
        // wrapper.classList.toggle('is-nav-open');
    }

    render() {
        return (
            <div className='blog-navbar-container'>
                <div ref={this.wrapperRef} className='wrapper'>
                    <div className='nav'>
                        <BlogNavIcon 
                            className='nav__icon'
                            type='menu-fold'
                            onClick={() => this.handleClick()}
                        />
                        <div className='nav__body'>
                            {/* Menu */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogNavbar;
