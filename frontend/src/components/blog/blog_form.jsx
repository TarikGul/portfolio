import React from 'react';
import '../../styles/blog_form.scss';

class BlogForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            ownerId: this.props.session.user.id,
            description: '',
            pictureFiles: null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        const { createBlog } = this.props;
        const { title, description, ownerId } = this.state;

        if (title.length === 0 || description.length === 0) {
            return null
        }; 
        debugger
        createBlog({
            description,
            title,
            ownerId
        });
    }

    render() {
        return (
            <div className='blog-form-container'>
                <div className='blog-form-inner-container'>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input 
                                type='text'
                                placeholder='Title'
                                value={this.state.title}
                                onChange={this.update('title')}/>
                        </label>
                        <label>
                            <textarea 
                                type='text'
                                placeholder='Description'
                                value={this.state.description}
                                onChange={this.update('description')}/>
                        </label>
                        <div className='submit-container'>
                            <button className='submit-button' type='submit'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default BlogForm;