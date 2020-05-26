import React from 'react';
import '../../styles/blog_form.scss';

class BlogForm extends React.Component {
    constructor(props) {
        super(props)

    }

    handleSubmit(e) {
        e.preventDefault();
        
    }

    render() {
        return (
            <div className='blog-form-container'>
                <div className='blog-form-inner-container'>
                    <form>
                        <label>Title</label>
                        <input type="text"/>
                        <label>Blog Post</label>
                        <input type="text" />
                    </form>
                </div>
            </div>
        )
    }
}

export default BlogForm;