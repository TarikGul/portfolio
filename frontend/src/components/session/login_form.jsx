import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        const { email, password } = state;
        let user = {
            email,
            password
        };

        this.props.login(user);
    };

    renderErrors() {
        const { errors } = state;
        return (
            <ul className='errors-list'>
                {Object.keys(errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        <div className='warning'>
                            {errors[error]}
                        </div>
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <form action="">
                    <div className=''>

                    </div>
                </form>
            </div>
        )
    };
}

export default LoginForm