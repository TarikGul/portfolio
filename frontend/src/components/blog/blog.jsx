import React from 'react';
import ReactGA from 'react-ga';
import BlogItem from './blog_item';
import Footer from '../footer/footer';
import BlogFormContainer from './blog_form_container';
import BlogNavbarContainer from './blog_navbar_container';
import { detectMob } from '../../util/detect_mobile';
import '../../styles/blog.scss';

class Blog extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        // Fetch all the blogs but not sorted
        this.props.fetchBlogs();

        // Google analytics - tracking
        if (window.location.hostname !== 'localhost') {
            ReactGA.initialize('UA-162754702-2');
            ReactGA.pageview('/blog');
        }
    }

    render() {
        const { session, blogs } = this.props;

        const posts = Object.values(blogs);
        const mobile = detectMob();

        return (
            <div className='blog-container'>
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
                                            authorQuote={post.authorQuote}/>
                                })
                            ) : (
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
                <Footer />
            </div>
        )
    }
}

export default Blog;