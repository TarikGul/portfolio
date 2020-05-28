import React from 'react';

class BlogNavbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.setState(prevState => ({ open: !prevState }))
    }

    render() {
        return (
            <div className='blog-navbar-container'>
                <div href='#' className='blog-navbar' onClick={this.handleClick}>
                    <div className='one'></div>
                    <div className='two'></div>
                    <div className='three'></div>
                </div>
            </div>
        )
    }
}

export default BlogNavbar;
