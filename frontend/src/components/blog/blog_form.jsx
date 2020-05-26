import React from 'react';
import '../../styles/blog_form.scss';

class BlogForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            ownerId: this.props,
            description: '',
            locationUrl: null,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div className='blog-form-container'>
                <div className='blog-form-inner-container'>
                    <form onSubmit={this.handleSubmit}>
                        <label>Title
                            <input 
                                type='text'
                                placeholder='Title'
                                value={this.state.title}
                                onChange={this.update('title')}/>
                        </label>
                        <label>Description
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