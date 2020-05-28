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
            success: false
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

        createBlog({
            description,
            title,
            ownerId
        })
            .then(() => this.setState({ title: '', description: '', success: true }));
    }

    render() {
        const { success } = this.state;
        return (
            <div className='blog-form-container'>
                <div className='welcome-back-tarik'>
                    Welcome back Tarik! Remember, the only way out is forward! <br/>
                    Keep chugging along bud, I know you got this. <br/>
                    One Love -Leafy
                </div>
                <div className='blog-form-inner-container'>
                    <form onSubmit={this.handleSubmit} className='blog-form'>
                        <label>
                            <input 
                                type='text'
                                className='blog-form-title'
                                placeholder='Title'
                                value={this.state.title}
                                onChange={this.update('title')}/>
                        </label>
                        <label>
                            <textarea 
                                type='text'
                                className='blog-form-description'
                                placeholder='Description'
                                value={this.state.description}
                                onChange={this.update('description')}/>
                        </label>
                        <div className='submit-container'>
                            <button className='submit-button' type='submit'>
                                Submit
                            </button>
                        </div>
                        {
                            success ? 
                            (
                                <div className='posted-blog-post'>
                                    Posted
                                </div>
                            ) : (
                                null
                            )
                        }
                    </form>
                </div>
            </div>
        )
    }
}

export default BlogForm;