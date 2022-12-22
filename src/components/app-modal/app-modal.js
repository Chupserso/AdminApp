import { Component } from "react";

class AppModal extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: ""
        }
    }
    createUserBtn = (e) => {
        e.preventDefault();
        this.props.createUser(this.state.name);
        this.setState({name: ""});
        this.props.closeModalBtn();
    }
    inputChange = (e) => {
        this.setState({name: e.target.value});
    }
    render () {
        return (
            <div className="modal">
                <div className="modal-wrapper">
                    <div className="close-modal" onClick={this.props.closeModalBtn}>x</div>
                    <div className="form">
                        <form className="modal-form" method="post" onSubmit={this.createUserBtn}>
                            <input type="text" name="username" className="modal-input" placeholder="Введите имя пользователя" onChange={this.inputChange} required />
                            <br /><input type="submit" name="modal-btn" className="modal-btn" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppModal;