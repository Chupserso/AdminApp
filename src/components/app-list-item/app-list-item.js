import { Component } from "react";

class AppListItem extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const name = this.props.name;
        const id = this.props.id;
        const privilege = this.props.privilege;
        let Privilege;
        if (privilege == "Администратор") {
            Privilege = () => {
                return (
                    <select className="privilege" onChange={(e) => this.props.privilegeChange(e.target.value, this.props.id)}>
                        <option value="Обыкновенный пользователь">Обыкновенный пользователь</option>
                        <option value="Помощник администратора">Помощник администратора</option>
                        <option value="Администратор" selected>Администратор</option>
                    </select>
                );
            }
        } else if (privilege == "Помощник администратора") {
            Privilege = () => {
                return (
                    <select className="privilege" onChange={(e) => this.props.privilegeChange(e.target.value, this.props.id)}>
                        <option value="Обыкновенный пользователь">Обыкновенный пользователь</option>
                        <option value="Помощник администратора" selected>Помощник администратора</option>
                        <option value="Администратор">Администратор</option>
                    </select>
                );
            }
        } else if (privilege == "Обыкновенный пользователь") {
            Privilege = () => {
                return (
                    <select className="privilege" onChange={(e) => this.props.privilegeChange(e.target.value, this.props.id)}>
                        <option value="Обыкновенный пользователь" selected>Обыкновенный пользователь</option>
                        <option value="Помощник администратора">Помощник администратора</option>
                        <option value="Администратор">Администратор</option>
                    </select>
                );
            }
        }
        return (
            <div className={"list-item " + this.props.classN}>
                <div className="list-item-name">{name}</div>
                <div className="list-item-privilege">
                    <Privilege />
                </div>
                <div className="list-item-delete">
                    <button className="list-item-delete-btn" onClick={() => this.props.deleteUser(id)}>Удалить пользователя</button>
                </div>
            </div>
        );
    }
}

export default AppListItem;