import React from 'react';
import BlogFormContainer from './blog_form_container';

class Blog extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { session } = this.props;
        return (
            <div className='blog-container'>
                <div className='blog-inner-container'>
                {
                    session.isAuthenticated && session.user === admin ?
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