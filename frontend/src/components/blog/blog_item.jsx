import React from 'react';

const parseDate = date => {
    const split = date.split('T');
    return split[0];
}

const BlogItem = props => {
    const { title, description, date } = props;
    return (
        <div className='blog-item-container'>
            <div className='blog-title'>
                {title}
            </div>
            <div className='blog-date'>
                {parseDate(date)}
            </div>
            <p className='blog-description'>
                {description}
            </p>  
        </div>
    )
};

export default BlogItem; 