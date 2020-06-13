import React from 'react';

const BlogNavIcon = props => {

    return (
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
};

export default BlogNavIcon;

