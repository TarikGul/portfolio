import React from 'react';

const BlogCard = (props) => {
    const { title, description, imageUrl } = props;

    return (
        <div className='blog-card'>
            <h2 className='blog-card-header'>{title}</h2>
            <div className='blog-card-container'>
                <img className='blog-card-image' src={imageUrl}/>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default BlogCard;