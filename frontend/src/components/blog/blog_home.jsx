import React, { useEffect, useState } from 'react';
import BlogCard from '../card/blog_card';

const data = {
    adventures: {
        title: 'Adventures',
        description: `I have years of long distance backpacking and adventuring under my belt as well as 
            tons of crazy stories and adventures that I have stored and gathered over the years. This is where I try to tell 
            those very stories and share some thoughts.`,
        imageUrl: '',
        queryType: ''
    },
    programming: {
        title: 'Programming',
        description: `I have years of long distance backpacking and adventuring under my belt as well as 
            tons of crazy stories and adventures that I have stored and gathered over the years. This is where I try to tell 
            those very stories and share some thoughts.`,
        imageUrl: '',
        queryType: ''
    },
    randomThoughts: {
        title: 'Random Thoughts',
        description: `I have years of long distance backpacking and adventuring under my belt as well as 
            tons of crazy stories and adventures that I have stored and gathered over the years. This is where I try to tell 
            those very stories and share some thoughts.`,
        imageUrl: '',
        queryType: ''
    },
    recentPost: {
        title: 'Most Recent',
        description: `I have years of long distance backpacking and adventuring under my belt as well as 
            tons of crazy stories and adventures that I have stored and gathered over the years. This is where I try to tell 
            those very stories and share some thoughts.`,
        imageUrl: '',
        queryType: ''
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
            input[key]
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
        <div>
            {
                blogCards.map((data, i) => (``
                    <BlogCard title={data.title} 
                              description={data.description} 
                              imageUrl={data.imageUrl}/>
                ))
            }
        </div>
    )
}

export default BlogHome;