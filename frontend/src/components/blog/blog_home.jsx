import React, { useEffect, useState } from 'react';
import BlogCard from '../card/blog_card';
import '../../styles/blog_home.scss';

// Can store this data in a different file
const data = {
    adventures: {
        title: 'Adventures',
        description: `I have years of long distance backpacking and adventuring under my belt as well as 
            tons of crazy stories and adventures that I have stored and gathered over the years. This is where I try to tell 
            those very stories and share some thoughts.`,
        imageUrl: '',
        queryType: '',
        path: 'adventures',
    },
    programming: {
        title: 'Programming',
        description: `I have years of long distance backpacking and adventuring under my belt as well as 
            tons of crazy stories and adventures that I have stored and gathered over the years. This is where I try to tell 
            those very stories and share some thoughts.`,
        imageUrl: '',
        queryType: '',
        path: 'programming',
    },
    randomThoughts: {
        title: 'Random Thoughts',
        description: `I have years of long distance backpacking and adventuring under my belt as well as 
            tons of crazy stories and adventures that I have stored and gathered over the years. This is where I try to tell 
            those very stories and share some thoughts.`,
        imageUrl: '',
        queryType: '',
        path: 'random-thoughts',
    },
    recentPost: {
        title: 'Most Recent',
        description: `I have years of long distance backpacking and adventuring under my belt as well as 
            tons of crazy stories and adventures that I have stored and gathered over the years. This is where I try to tell 
            those very stories and share some thoughts.`,
        imageUrl: '',
        queryType: '',
        path: 'recent',
    }

}

const BlogHome = () => {
    const [blogCards, setBlogCards] =  useState([]);

    useEffect(() => {
        // Need to Query the newest post

        // Also assign data to state
        const formattedData = formatBlogCards(data);
        setBlogCards(formattedData);
    }, []);

    const formatBlogCards = (input) => {
        const keys = Object.keys(input);

        return keys.map((key) => {
            return input[key]
        })
    }

    /**
     * List of topics that need to be available
     * 
     * Newest Post
     * Adventures
     * Programming
     * Random Thoughts
     */

    return (
        <div className='blog-home-container'>
            {
                blogCards.map((blogCard, i) => (
                    <BlogCard title={blogCard.title}
                              url={blogCard.url} 
                              description={blogCard.description} 
                              imageUrl={blogCard.imageUrl}
                              key={`blog-card-${i}`}/>
                ))
            }
        </div>
    )
}

export default BlogHome;