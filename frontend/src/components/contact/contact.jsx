import React from 'react';
import '../../styles/contact.scss'

class Contact {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            message: '',
            email: '',
        };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { createContact } = this.props;

        createContact();
    }

    render() {
        return (
            <div className='contact-container'>
                <form>
            
                </form>
            </div>
        )
    }
};

export default Contact;