import React from 'react';
import { useHistory } from 'react-router-dom';

const BlogCard = (props) => {
    const history = useHistory();
    const { title, description, imageUrl, url } = props;

    const handleClick = () => {
        history.push(`/blog/${url}`);
    }

    return (
        <div className='blog-card' onClick={() => handleClick()}>
            <h2 className='blog-card-header'>{title}</h2>
            <div className='blog-card-container'>
                <img className='blog-card-image' src={imageUrl}/>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default BlogCard;