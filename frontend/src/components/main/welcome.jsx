import React from 'react';
import Prism from '../../../node_modules/prismjs';
import '../../styles/prism.scss';
import '../../styles/welcome.scss'

class Welcome extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div className="welcome-container">
                <div className="border_gradient">
                    <img src="/self-pic.png" className="self-pic"/>
                </div>
                <div className="welcome-pizzaz">
                    <div className="name-welcome">
                        TARIK GUL
                    </div>
                    {/* <div className="code-snippet"> */}
                        <pre >
                            <code className="language-javascript">
                                {`
onSubmit(e) {
    e.preventDefault();
    this.setState(prevState => {
        alertFileLimit: !prevState.alertFileSize
    });
    console.log('Welcome to my personal website! One love')
}
                                `}
                            </code>
                        </pre>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default Welcome;