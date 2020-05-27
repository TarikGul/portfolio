import React from 'react';
import '../../styles/contact.scss'

class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            message: '',
            email: '',
            error: false
        };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        // e.preventDefault();
        console.log('hit the submit')
        const { createContact } = this.props;
        const { title, message, email } = this.state;
        if (title.length === 0 || message.length === 0 || email.length === 0) {
            this.setState({ error: true })
            console.log('hit the error')
            return;
        };

        createContact({
            title,
            message,
            email
        });
    }

    render() {
        const { error } = this.state;
        return (
            <div className='contact-container'>
                <div className='contact-me'>
                    <span>Contact Me</span>
                </div>
                <div className='contact-inner-container'>
                    <form className='contact-form'>
                        <input 
                            type='text'
                            className='contact-title-input'
                            placeholder='Subject'
                            onChange={this.update('title')}/>
                        <input 
                            type='text'
                            className='contact-email-input'
                            placeholder='Your Email'
                            onChange={this.update('email')}/>
                        <textarea 
                            className='contact-message-input'
                            placeholder='Write Tarik a message'
                            onChange={this.update('message')}/>
                    </form>
                    {
                        error ?
                        (
                        <div className='contact-error-message'>
                            Please fill in all the appropriate fields
                        </div>

                        ): (
                            null
                        )
                    }
                    <div className='contact-submit-button-container'>
                        <button className='contact-submit-button' type='checkbox' onClick={() => this.handleSubmit()}>
                            Send
                        </button>
                    </div>
                </div>
                
            </div>
        )
    }
};

export default Contact;