import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        const { email, password } = this.state;
        let user = {
            email,
            password
        };

        this.props.login(user);
    };

    renderErrors() {
        const { errors } = this.props;

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
        const { email, password } = this.state;
        return (
            <div className='login-form-container'>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <div className='input-wrapper'>
                        <input 
                            type='text'
                            placholder='Email'
                            value={email}
                            onChange={this.update('email')}
                        />
                    </div>
                    <div className='input-wrapper'>
                        <input
                            type='password'
                            placholder='Password'
                            value={password}
                            onChange={this.update('password')}
                        />
                    </div>
                </form>
                <button
                    className='session-button'
                    type='submit'
                    onClick={this.handleSubmit}>
                    Log In
                </button>
            </div>
        )
    };
}

export default LoginForm