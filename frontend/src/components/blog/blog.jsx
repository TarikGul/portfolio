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
        debugger
        const posts = Object.values(blogs);

        if(posts.length === 0 ) {
            return null
        }
        return (
            <div className='blog-container'>
                <div className='blog-inner-container'>
                    <div className='blog-posts'>
                        {
                            posts.map((post, i) => {
                                return <BlogItem 
                                        key={`item${i}`}
                                        title={post.title}
                                        description={post.description}
                                        date={post.date}/>
                            })
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