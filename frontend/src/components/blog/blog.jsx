import React from 'react';
import BlogFormContainer from './blog_form_container';
import '../../styles/blog.scss';

class Blog extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        debugger
        const { session } = this.props;
        return (
            <div className='blog-container'>
                <div className='blog-inner-container'>
                {
                    session.isAuthenticated && session.user === 'testing' ?
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