import React from 'react';

const BlogItem = props => {
    const { title, description, date } = props;
    return (
        <div className='blog-item-container'>
            {title} <br/>
            {description} <br/>
            {date} <br/>
        </div>
    )
};

export default BlogItem; 