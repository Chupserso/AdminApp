import { Component } from "react";

class AppHeader extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <header className="header">
                <div className="title">Административная панель</div>
                <div className="create-user">
                    <button className="create-user-btn" onClick={this.props.openModalBtn}>Создать пользователя</button>
                </div>
            </header>
        );
    }
}

export default AppHeader;