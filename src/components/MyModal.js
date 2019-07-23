import React from 'react';

class MyModal extends React.Component {
    componentDidMount() {
        // here I want to open modal
    }

    dismissModal = ()=>{
        this.props.toggle()
    }

    render() {
        return (
            <div
                onClick={this.dismissModal}
                className={`modal fade WelcomeModal ${this.props.showModal ? 'show' : ''}`}
                style={{
                    display: `${this.props.showModal ? 'block' : 'none'}`,
                }}
                id="WelcomeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="camera-box">
                                <img alt="" src="/img/yellow-logo.svg"/>
                                <h5 className="modal-title" id="exampleModalLabel">Welcome to the Cozy App!</h5>
                            </div>
                        </div>
                        <div className="modal-body">
                            <p className="text-center">On the following screens weʼll ask
                                you to register the Cozys in your
                                home & adjust your temperature
                                settings. Youʼll need the following
                                information:</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyModal