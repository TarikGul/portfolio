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

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();


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