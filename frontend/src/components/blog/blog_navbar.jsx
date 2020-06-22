import React from 'react';
import BlogNavIcon from './navbar_icon';

class BlogNavbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }

        // this.wrapperRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log('hello')

        this.setState(prevState => ({ open: !prevState.open }))
        console.log(this.state)
        // const wrapper = this.wrapperRef.current;
        // wrapper.classList.toggle('is-nav-open');
    }

    render() {

        const { open } = this.state;
        return (
            <div className='blog-navbar-container'>
                <div className='wrapper'>
                    {
                        open ? 
                        (
                            <div className='nav-open'>
                                <BlogNavIcon
                                    open={true}
                                    type='menu-fold'
                                    handleClick={this.handleClick}
                                />
                                <div className='nav_body'>
                                    Menu
                                </div>
                            </div>
                        ) : (
                            
                            <div className='nav'>
                                <BlogNavIcon 
                                    open={false}
                                    type='menu-fold'
                                    handleClick={this.handleClick}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default BlogNavbar;
