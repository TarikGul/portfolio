import React from 'react';
import BlogFormContainer from './blog_form_container';
import '../../styles/blog.scss';

class Blog extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        
    }

    render() {
        const { session } = this.props;
        return (
            <div className='blog-container'>
                <div className='blog-inner-container'>
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