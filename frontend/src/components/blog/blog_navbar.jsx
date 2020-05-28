import React from 'react';

class BlogNavbar extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='blog-navbar-container'>
                <div href='#' className='blog-navbar'>
                    <div className='one'></div>
                    <div className='two'></div>
                    <div className='three'></div>
                </div>
            </div>
        )
    }
}

export default BlogNavbar;
