import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactGA from 'react-ga';
import BlogItem from './blog_item';
import Footer from '../footer/footer';
import BlogFormContainer from './blog_form_container';
import BlogNavbarContainer from './blog_navbar_container';
import { detectMob } from '../../util/detect_mobile';
import '../../styles/blog.scss';

const Blog = props => {
    const params = useParams();
    const { session, blogs } = props;
    const posts = Object.values(blogs);
    const mobile = detectMob();

    useEffect(() => {
        // Fetch all the blogs but not sorted
        // props.fetchBlogs();
        // Fetch blogs pretaining to the url
        props.fetchTypeBlogs(params.blogType)

        // Google analytics - tracking
        if (window.location.hostname !== 'localhost') {
            ReactGA.initialize('UA-162754702-2');
            ReactGA.pageview('/blog');
        }
    }, []);

    // This fixes the style bug with the footer.
    let style = {};
    if(posts.length === 0) {
        style['height'] = 'calc(100vh - 60px)'
    }

    return (
        <div className='blog-container' style={style}>
            {
                mobile ?
                    (
                        null
                    ) : (
                        <BlogNavbarContainer />
                    )
            }
            <div className='blog-inner-container'>
                <div className='blog-posts'>
                    {
                        posts.length !== 0 ?
                            (
                                posts.map((post, i) => {
                                    return <BlogItem
                                        key={`item${i}`}
                                        title={post.title}
                                        description={post.description}
                                        date={post.date}
                                        quote={post.quote}
                                        authorQuote={post.authorQuote} />
                                })
                            ) : (
                                // lets change this to a no blogs, and add a new blog loader
                                <div className='container'>
                                    <div className='progress progress-infinite'>
                                        <div className='progress-bar3' >
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
                {
                    session.isAuthenticated && session.user.username === 'admin' ?
                        (
                            <BlogFormContainer />
                        ) : (
                            null
                        )
                }
            </div>
            <Footer position={'relative'} />
        </div>
    )
}

export default Blog;