import React from 'react';
import '../../styles/blog_form.scss';

class BlogForm extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='blog-form-container'>
                <div className='blog-form-inner-container'>
                    <form>
                        <label>New Blog Post</label>
                        <input type="text"/>
                        <label>New Blog Post</label>
                        <input type="text" />
                    </form>
                </div>
            </div>
        )
    }
}

export default BlogForm;