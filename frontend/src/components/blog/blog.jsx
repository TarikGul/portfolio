import React from 'react';
import BlogItem from './blog_item';
import BlogFormContainer from './blog_form_container';
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
                <div className='blog-navbar-container'>
                    <div href="#" className='blog-navbar'>
                        <div className='one'></div>
                        <div className='two'></div>
                        <div className='three'></div>
                    </div>
                </div>
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
                                <div>
                                    There are currently no posts
                                </div>
                            )
                        }
                    </div>
                    {
                        session.isAuthenticated && session.user.username === 'testing' ?
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