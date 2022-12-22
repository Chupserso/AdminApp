import { Component } from "react";
import AppListItem from "../app-list-item/app-list-item";

class AppList extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const items = this.props.data.map(item => {
            let className;
            if (item.privilege == "Обыкновенный пользователь") {
                className = "black"
            } else if (item.privilege == "Помощник администратора") {
                className = "blue";
            } else if (item.privilege == "Администратор") {
                className = "red"
            }
            return <AppListItem name={item.name} id={item.id} privilege={item.privilege} deleteUser={this.props.deleteUser} classN={className} privilegeChange={this.props.privilegeChange} />
        })
        return (
            <div className="list-block">
                <div className="list-title">Пользователи:</div>
                <div className="list">
                    {items}
                </div>
            </div>
        );
    }
}

export default AppList;