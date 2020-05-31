import React from 'react';

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

        this.setState(prevState => ({ open: !prevState.open, fade: !prevState.fade }))
    }

    render() {
        const { open } = this.state;
        return (
            <div className='blog-navbar-container'>
                {
                    open ? 
                    (    
                        <div 
                            href='#' 
                            className='blog-navbar' 
                            onClick={this.handleClick}
                            onAnimationEnd={() => this.setState({ fade: false })}>
                            <div className='one'></div>
                            <div className='two'></div>
                            <div className='three'></div>
                        </div>
                    ) : (
                        <div 
                            href='#' 
                            className='blog-navbar' 
                            onClick={this.handleClick}
                            onAnimationEnd={() => this.setState({ fade: false })}>
                            <div className='one'></div>
                            <div className='two'></div>
                            <div className='three'></div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default BlogNavbar;
