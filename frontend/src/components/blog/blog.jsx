import React from 'react';
import BlogItem from './blog_item';
import BlogFormContainer from './blog_form_container';
import BlogNavbarContainer from './blog_navbar_container';
import '../../styles/blog.scss';

class Blog extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchBlogs();
    }

    render() {
        const { session, blogs } = this.props;

        const posts = Object.values(blogs);

        return (
            <div className='blog-container'>
                <BlogNavbarContainer />
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
                                            date={post.date}/>
                                })
                            ) : (
                                <div class='container'>
                                    <div class='progress progress-infinite'>
                                        <div class='progress-bar3' >
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
            </div>
        )
    }
}

export default Blog;